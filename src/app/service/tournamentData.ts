import { Tournament } from "../interface/tournament";
import { Leaderboard } from "../interface/leaderboard";

export const SEASON_TOURNAMENT:Tournament[] = [
    {id:1,PlayingDate:new Date(2021,08.10),HomeTeam:'Arema',
    AwayTeam:'Persebaya',HomeScore:3,AwayScore:2,
    RefName:'rian',notes:'Pertandingan Overtime'},
    {id:2,PlayingDate:new Date(2021,08.10),HomeTeam:'Evos',
    AwayTeam:'RRQ',HomeScore:2,AwayScore:1,
    RefName:'rian',notes:'Pertandingan Terlalu Easy kirain VSAI'},
    {id:3,PlayingDate:new Date(2021,08.14),HomeTeam:'Real Madrid',
    AwayTeam:'Inter Milan',HomeScore:3,AwayScore:2,
    RefName:'rian',notes:'Pertandingan Balas-Balasan'},
    {id:4,PlayingDate:new Date(2021,08.15),HomeTeam:'Machester United',
    AwayTeam:'Newcastle United',HomeScore:4,AwayScore:1,
    RefName:'rian',notes:'Pertandingan Membantai'},
    {id:5,PlayingDate:new Date(2021,08.17),HomeTeam:'Madura United',
    AwayTeam:'Persebaya',HomeScore:5,AwayScore:2,
    RefName:'rian',notes:'Pertandingan Kartu merah'},
]

export const LEADERBOARD:Leaderboard[] = [
    {id:1,name:'EVOS',type:'Over 30'},
    {id:2,name:'Persebaya',type:'Over 30'},
    {id:3,name:'Real Madrid',type:'Over 30'},
    {id:4,name:'Newcastle United',type:'Over 30'},
    {id:5,name:'Persebaya',type:'Over 30'},
    {id:6,name:'Inter Milan',type:'Over 30'}
]