const { logic } = require('./index');

test('Retrieve characters(40)', () => {
    return logic.retrieveCharacters()
        .then(res => {
            expect(res.data.count).toEqual(40)
            expect(res.data.limit).toEqual(40)
            expect(res.data.total).toEqual(1493)
        })
})

test('Retrieve characters with custom limit(60)', () => {
    return logic.retrieveCharacters(60)
        .then(res => {
            expect(res.data.limit).toEqual(60)
        })
})

test('Retrieve characters by Id', () => {
    return logic.retriveCharacterById(1010354)
        .then(res => {
            expect(res.data.results[0]).not.toBeUndefined()
            expect(res.data.count).toEqual(1)
            expect(res.data.results[0].id).toEqual(1010354)
            expect(res.data.results[0].name).toEqual('Adam Warlock')
        })
})

test('Retrieve characters by fail', () => {
    return logic.retriveCharacterById(123456)
        .then(res => {
            expect(res.data).toBeUndefined();
        })
})

test('Filter with appearances comics type', () => {
    return logic.filterWithAppearances(30, 'comics')
        .then(res => {
            expect(res[0].comics.available).toBeGreaterThanOrEqual(30);
            expect(res[1].comics.available).toBeGreaterThanOrEqual(30);
            expect(res[2].comics.available).toBeGreaterThanOrEqual(30);
        })
})

test('Filter with appearances series type', () => {
    return logic.filterWithAppearances(10, 'series')
        .then(res => {
            expect(res[0].series.available).toBeGreaterThanOrEqual(10);
            expect(res[1].series.available).toBeGreaterThanOrEqual(10);
            expect(res[2].series.available).toBeGreaterThanOrEqual(10);
        })
})

test('Filter with appearances stories type', () => {
    return logic.filterWithAppearances(50, 'stories')
        .then(res => {
            expect(res[0].stories.available).toBeGreaterThanOrEqual(50);
            expect(res[1].stories.available).toBeGreaterThanOrEqual(50);
            expect(res[2].stories.available).toBeGreaterThanOrEqual(50);
        })
})

test('Retrieve character with name', () => {
    return logic.retrieveCharacterByName('Thor')
        .then(res => {
            console.log(res.data.results)
            expect(res.data.results.length).toEqual(1);
            expect(res.data.results[0].id).toEqual(1009664);
            expect(res.data.results[0].name).toEqual('Thor');
        })
})

test('Retrive data with name start by...', () => {
    return logic.nameStartWith('Ma')
        .then(res => {
            console.log(res.data.results)
            expect(res.data.results.length).toEqual(20);
            expect(res.data.results[0].name).toMatch(/Ma/);
            expect(res.data.results[1].name).toMatch(/Ma/);
            expect(res.data.results[2].name).toMatch(/Ma/);
            expect(res.data.results[3].name).not.toMatch(/La/);
        })
})

test('Retrive data with name start by...fail', () => {
    return logic.nameStartWith('asdasdasdsad')
        .then(res => {
            console.log(res.data.results)
            expect(res.data.count).toEqual(0);
            expect(res.data.results.length).toEqual(0);
            expect(res.data.total).toEqual(0);
        })
})

