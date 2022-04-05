export type CountryM={
    id:number,
    altSpellings: string[];
    area: number;
    borders: string[]
    capital: string[];
    capitalInfo: {latlng:number[]};
    car: {signs: [], side: string}
    cca2: string
    cca3: string
    ccn3: string
    cioc: string
    coatOfArms: {png: string, svg: string}
    continents: [string]
    currencies: Record<string, Record<string,{name:string,symbol:string}>>
    demonyms: Record<string, Record<string,string>>
    fifa: string
    flag: string
    flags: {png: string, svg: string}
    gini: Record<number,number>
    idd: {root: string, suffixes: []}
    independent: boolean
    landlocked: false
    languages: Record<string,string>
    latlng: number[]
    maps: {googleMaps: string, openStreetMaps: string}
    name: {common: string, official: string}
    population: number
    postalCode: {format: string, regex: string}
    region: String
    startOfWeek: string
    status: string
    subregion: string
    timezones: string[]
    tld: string[]
    translations: Record<string,Record<string, {common:string,official:string}>>
    unMember: boolean
}