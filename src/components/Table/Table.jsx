import './Table.scss';
import React, { useState } from 'react'
import Modal from '../Modal/Modal';

export default function Table() {
  const eplTeams =
    [
      {
        rank: 1,
        team: {
          id: 40,
          name: "Liverpool",
          logo: "https://media.api-sports.io/football/teams/40.png",
        },
        points: 99,
        goalsDiff: 52,
        group: "Premier League",
        form: "WWLDW",
        status: "same",
        description: "Promotion - Champions League (Group Stage)",
        all: {
          played: 38,
          win: 32,
          draw: 3,
          lose: 3,
          goals: { for: 85, against: 33 },
        },
        home: {
          played: 19,
          win: 18,
          draw: 1,
          lose: 0,
          goals: { for: 52, against: 16 },
        },
        away: {
          played: 19,
          win: 14,
          draw: 2,
          lose: 3,
          goals: { for: 33, against: 17 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 2,
        team: {
          id: 50,
          name: "Manchester City",
          logo: "https://media.api-sports.io/football/teams/50.png",
        },
        points: 81,
        goalsDiff: 67,
        group: "Premier League",
        form: "WWWWW",
        status: "same",
        description: "Promotion - Champions League (Group Stage)",
        all: {
          played: 38,
          win: 26,
          draw: 3,
          lose: 9,
          goals: { for: 102, against: 35 },
        },
        home: {
          played: 19,
          win: 15,
          draw: 2,
          lose: 2,
          goals: { for: 57, against: 13 },
        },
        away: {
          played: 19,
          win: 11,
          draw: 1,
          lose: 7,
          goals: { for: 45, against: 22 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 3,
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media.api-sports.io/football/teams/33.png",
        },
        points: 66,
        goalsDiff: 30,
        group: "Premier League",
        form: "WDWDW",
        status: "same",
        description: "Promotion - Champions League (Group Stage)",
        all: {
          played: 38,
          win: 18,
          draw: 12,
          lose: 8,
          goals: { for: 66, against: 36 },
        },
        home: {
          played: 19,
          win: 10,
          draw: 7,
          lose: 2,
          goals: { for: 40, against: 17 },
        },
        away: {
          played: 19,
          win: 8,
          draw: 5,
          lose: 6,
          goals: { for: 26, against: 19 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 4,
        team: {
          id: 49,
          name: "Chelsea",
          logo: "https://media.api-sports.io/football/teams/49.png",
        },
        points: 66,
        goalsDiff: 15,
        group: "Premier League",
        form: "WLWLW",
        status: "same",
        description: "Promotion - Champions League (Group Stage)",
        all: {
          played: 38,
          win: 20,
          draw: 6,
          lose: 12,
          goals: { for: 69, against: 54 },
        },
        home: {
          played: 19,
          win: 11,
          draw: 3,
          lose: 5,
          goals: { for: 30, against: 16 },
        },
        away: {
          played: 19,
          win: 9,
          draw: 3,
          lose: 7,
          goals: { for: 39, against: 38 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 5,
        team: {
          id: 46,
          name: "Leicester",
          logo: "https://media.api-sports.io/football/teams/46.png",
        },
        points: 62,
        goalsDiff: 26,
        group: "Premier League",
        form: "LLWLD",
        status: "same",
        description: "Promotion - Europa League (Group Stage)",
        all: {
          played: 38,
          win: 18,
          draw: 8,
          lose: 12,
          goals: { for: 67, against: 41 },
        },
        home: {
          played: 19,
          win: 11,
          draw: 4,
          lose: 4,
          goals: { for: 35, against: 17 },
        },
        away: {
          played: 19,
          win: 7,
          draw: 4,
          lose: 8,
          goals: { for: 32, against: 24 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 6,
        team: {
          id: 47,
          name: "Tottenham",
          logo: "https://media.api-sports.io/football/teams/47.png",
        },
        points: 59,
        goalsDiff: 14,
        group: "Premier League",
        form: "DWWWD",
        status: "same",
        description: "Promotion - Europa League (Qualification)",
        all: {
          played: 38,
          win: 16,
          draw: 11,
          lose: 11,
          goals: { for: 61, against: 47 },
        },
        home: {
          played: 19,
          win: 12,
          draw: 3,
          lose: 4,
          goals: { for: 36, against: 17 },
        },
        away: {
          played: 19,
          win: 4,
          draw: 8,
          lose: 7,
          goals: { for: 25, against: 30 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 7,
        team: {
          id: 39,
          name: "Wolves",
          logo: "https://media.api-sports.io/football/teams/39.png",
        },
        points: 59,
        goalsDiff: 11,
        group: "Premier League",
        form: "LWDWL",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 15,
          draw: 14,
          lose: 9,
          goals: { for: 51, against: 40 },
        },
        home: {
          played: 19,
          win: 8,
          draw: 7,
          lose: 4,
          goals: { for: 27, against: 19 },
        },
        away: {
          played: 19,
          win: 7,
          draw: 7,
          lose: 5,
          goals: { for: 24, against: 21 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 8,
        team: {
          id: 42,
          name: "Arsenal",
          logo: "https://media.api-sports.io/football/teams/42.png",
        },
        points: 56,
        goalsDiff: 8,
        group: "Premier League",
        form: "WLWLD",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 14,
          draw: 14,
          lose: 10,
          goals: { for: 56, against: 48 },
        },
        home: {
          played: 19,
          win: 10,
          draw: 6,
          lose: 3,
          goals: { for: 36, against: 24 },
        },
        away: {
          played: 19,
          win: 4,
          draw: 8,
          lose: 7,
          goals: { for: 20, against: 24 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 9,
        team: {
          id: 62,
          name: "Sheffield Utd",
          logo: "https://media.api-sports.io/football/teams/62.png",
        },
        points: 54,
        goalsDiff: 0,
        group: "Premier League",
        form: "LLLWW",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 14,
          draw: 12,
          lose: 12,
          goals: { for: 39, against: 39 },
        },
        home: {
          played: 19,
          win: 10,
          draw: 3,
          lose: 6,
          goals: { for: 24, against: 15 },
        },
        away: {
          played: 19,
          win: 4,
          draw: 9,
          lose: 6,
          goals: { for: 15, against: 24 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 10,
        team: {
          id: 44,
          name: "Burnley",
          logo: "https://media.api-sports.io/football/teams/44.png",
        },
        points: 54,
        goalsDiff: -7,
        group: "Premier League",
        form: "LWDDW",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 15,
          draw: 9,
          lose: 14,
          goals: { for: 43, against: 50 },
        },
        home: {
          played: 19,
          win: 8,
          draw: 4,
          lose: 7,
          goals: { for: 24, against: 23 },
        },
        away: {
          played: 19,
          win: 7,
          draw: 5,
          lose: 7,
          goals: { for: 19, against: 27 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 11,
        team: {
          id: 41,
          name: "Southampton",
          logo: "https://media.api-sports.io/football/teams/41.png",
        },
        points: 52,
        goalsDiff: -9,
        group: "Premier League",
        form: "WWDDD",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 15,
          draw: 7,
          lose: 16,
          goals: { for: 51, against: 60 },
        },
        home: {
          played: 19,
          win: 6,
          draw: 3,
          lose: 10,
          goals: { for: 21, against: 35 },
        },
        away: {
          played: 19,
          win: 9,
          draw: 4,
          lose: 6,
          goals: { for: 30, against: 25 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 12,
        team: {
          id: 45,
          name: "Everton",
          logo: "https://media.api-sports.io/football/teams/45.png",
        },
        points: 49,
        goalsDiff: -12,
        group: "Premier League",
        form: "LWDLD",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 13,
          draw: 10,
          lose: 15,
          goals: { for: 44, against: 56 },
        },
        home: {
          played: 19,
          win: 8,
          draw: 7,
          lose: 4,
          goals: { for: 24, against: 21 },
        },
        away: {
          played: 19,
          win: 5,
          draw: 3,
          lose: 11,
          goals: { for: 20, against: 35 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 13,
        team: {
          id: 34,
          name: "Newcastle",
          logo: "https://media.api-sports.io/football/teams/34.png",
        },
        points: 44,
        goalsDiff: -20,
        group: "Premier League",
        form: "LDLLL",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 11,
          draw: 11,
          lose: 16,
          goals: { for: 38, against: 58 },
        },
        home: {
          played: 19,
          win: 6,
          draw: 8,
          lose: 5,
          goals: { for: 20, against: 21 },
        },
        away: {
          played: 19,
          win: 5,
          draw: 3,
          lose: 11,
          goals: { for: 18, against: 37 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 14,
        team: {
          id: 52,
          name: "Crystal Palace",
          logo: "https://media.api-sports.io/football/teams/52.png",
        },
        points: 43,
        goalsDiff: -19,
        group: "Premier League",
        form: "DLLLL",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 11,
          draw: 10,
          lose: 17,
          goals: { for: 31, against: 50 },
        },
        home: {
          played: 19,
          win: 6,
          draw: 5,
          lose: 8,
          goals: { for: 15, against: 20 },
        },
        away: {
          played: 19,
          win: 5,
          draw: 5,
          lose: 9,
          goals: { for: 16, against: 30 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 15,
        team: {
          id: 51,
          name: "Brighton",
          logo: "https://media.api-sports.io/football/teams/51.png",
        },
        points: 41,
        goalsDiff: -15,
        group: "Premier League",
        form: "WDDLL",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 9,
          draw: 14,
          lose: 15,
          goals: { for: 39, against: 54 },
        },
        home: {
          played: 19,
          win: 5,
          draw: 7,
          lose: 7,
          goals: { for: 20, against: 27 },
        },
        away: {
          played: 19,
          win: 4,
          draw: 7,
          lose: 8,
          goals: { for: 19, against: 27 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 16,
        team: {
          id: 48,
          name: "West Ham",
          logo: "https://media.api-sports.io/football/teams/48.png",
        },
        points: 39,
        goalsDiff: -13,
        group: "Premier League",
        form: "DDWWL",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 10,
          draw: 9,
          lose: 19,
          goals: { for: 49, against: 62 },
        },
        home: {
          played: 19,
          win: 6,
          draw: 4,
          lose: 9,
          goals: { for: 30, against: 33 },
        },
        away: {
          played: 19,
          win: 4,
          draw: 5,
          lose: 10,
          goals: { for: 19, against: 29 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 17,
        team: {
          id: 66,
          name: "Aston Villa",
          logo: "https://media.api-sports.io/football/teams/66.png",
        },
        points: 35,
        goalsDiff: -26,
        group: "Premier League",
        form: "DWDWL",
        status: "same",
        description: null,
        all: {
          played: 38,
          win: 9,
          draw: 8,
          lose: 21,
          goals: { for: 41, against: 67 },
        },
        home: {
          played: 19,
          win: 7,
          draw: 3,
          lose: 9,
          goals: { for: 22, against: 30 },
        },
        away: {
          played: 19,
          win: 2,
          draw: 5,
          lose: 12,
          goals: { for: 19, against: 37 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 18,
        team: {
          id: 35,
          name: "Bournemouth",
          logo: "https://media.api-sports.io/football/teams/35.png",
        },
        points: 34,
        goalsDiff: -25,
        group: "Premier League",
        form: "WLLWD",
        status: "same",
        description: "Relegation - Championship",
        all: {
          played: 38,
          win: 9,
          draw: 7,
          lose: 22,
          goals: { for: 40, against: 65 },
        },
        home: {
          played: 19,
          win: 5,
          draw: 6,
          lose: 8,
          goals: { for: 22, against: 30 },
        },
        away: {
          played: 19,
          win: 4,
          draw: 1,
          lose: 14,
          goals: { for: 18, against: 35 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 19,
        team: {
          id: 38,
          name: "Watford",
          logo: "https://media.api-sports.io/football/teams/38.png",
        },
        points: 34,
        goalsDiff: -28,
        group: "Premier League",
        form: "LLLWW",
        status: "same",
        description: "Relegation - Championship",
        all: {
          played: 38,
          win: 8,
          draw: 10,
          lose: 20,
          goals: { for: 36, against: 64 },
        },
        home: {
          played: 19,
          win: 6,
          draw: 6,
          lose: 7,
          goals: { for: 22, against: 27 },
        },
        away: {
          played: 19,
          win: 2,
          draw: 4,
          lose: 13,
          goals: { for: 14, against: 37 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },
      {
        rank: 20,
        team: {
          id: 71,
          name: "Norwich",
          logo: "https://media.api-sports.io/football/teams/71.png",
        },
        points: 21,
        goalsDiff: -49,
        group: "Premier League",
        form: "LLLLL",
        status: "same",
        description: "Relegation - Championship",
        all: {
          played: 38,
          win: 5,
          draw: 6,
          lose: 27,
          goals: { for: 26, against: 75 },
        },
        home: {
          played: 19,
          win: 4,
          draw: 3,
          lose: 12,
          goals: { for: 19, against: 37 },
        },
        away: {
          played: 19,
          win: 1,
          draw: 3,
          lose: 15,
          goals: { for: 7, against: 38 },
        },
        update: "2020-07-26T00:00:00+00:00",
      },

    ]

  const [searchTerm, setSearchTerm] = useState("")
  const [currentClub, setCurrentClub] = useState(null)
  const [show, setShow] = useState(false)

  const handleClub = (item) => {
    setCurrentClub(item)
    setShow(true)
  }
  return (

    <div className='table-container'>
      <button onClick={() => setShow(true)}>Show modal</button>

     <Modal 
     onClose={() => setCurrentClub(null)} 
     show={currentClub}
     club={currentClub?.team.name}
     />

      {currentClub &&
        <div >
          <h2> Details: {currentClub.rank} </h2>

        </div>}
      <input type="text" placeholder="Search..." onChange={(event) => {
        setSearchTerm(event.target.value)
      }} />


      <div className='table-row header'>
        <div className='table-column'>Rank</div>
        <div className='table-column'>Club</div>
        <div className='table-column'>Crest</div>
        <div className='table-column'>Points</div>

        
      </div>
      {eplTeams.filter((item) => {
        if (searchTerm === "") {
          return item
        } else if (item.team.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return item
        }
      }).map(item => (
        <div key={item.team.id} className='table-row' onClick={event => handleClub(item)}>
          <div className='table-column'>{item.rank}</div>
          <div className='table-column'>{item.team.name}</div>
          <div className='table-column'><img src={item.team.logo} alt="" /></div>
          <div className='table-column'>{item.points}</div>
        </div>
      ))
      }

    </div>

  );
}