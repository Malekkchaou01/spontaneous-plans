# Spontaneous Plans ✨

A concept for making casual plans with friends easier to discover and share.

As we grow older, it gets harder to find time to spend with friends. Everyone has different schedules, responsibilities, and routines, but we still want to enjoy simple moments together.

Sometimes I just want to grab a coffee, go for a walk, run an errand, or spend a little time outdoors with someone. But finding out who is available often means sending multiple messages or calling people one by one. Sometimes the effort feels like too much, and I end up going alone or staying home.

Spontaneous Plans explores a different approach: a shared map where friends can post low-pressure activity ideas and quickly see who might be interested. The goal is to make everyday plans feel easier to coordinate without turning every small outing into a full event.

## Why this matters

The app is designed for casual, informal plans between friends:
- spontaneous, low-commitment activities
- ideas shared on a map instead of group-chat messages
- a simple way to see which friends might want to join

## Current prototype

The Figma prototype shows the intended design. A first coded version (React, TypeScript, Leaflet) already lets you see activities as pins on a map, tap a pin to see details, and mark yourself as interested. It uses sample data and nothing is saved yet

Figma prototype (v2, in progress):
https://www.figma.com/proto/nKmWdR5u0rOxBrIDW44xiB/Spontaneous-Plans-v2?node-id=0-1&t=aQ4wGqX8jPALNtkt-1

## What I’ve tested so far

I tested the clickable prototype with 3 people. They were able to navigate the flow and create or open an activity without assistance. 1 of the 3 wanted to suggest more creative activities, which led me to explore a "Something else ✨" option next.

This was an early test with a small group, so I treat the results as an initial signal rather than proof.

## Design decisions & open questions

**Decisions**
- Pins show activities at approximate places, not people's live locations. The place is chosen by tapping the map.
- Plans are temporary: a pin disappears 4 hours after its start time. If someone picks a time that has already passed, it counts as tomorrow. This is only enforced in the browser for now.
- Joining is a light "I'm interested" toggle, not a binding RSVP, to keep plans low-pressure.
- Only the host can remove an activity.
- Data is saved in the browser (localStorage), so it exists on one device only. Sharing plans between friends needs a backend.

**Open questions**
- Is a "Something else ✨" option (custom activity name and emoji) worth adding? I haven't tested it yet.
- Is the "Out there! ✨" confirmation after sharing noticeable enough? One tester only saw it after I pointed it out.
- One tester asked for a "nearby" filter. I'm not planning it for now: it would need location access, and a small friends-only map may not need it.
- Should a user be limited to one active activity at a time? Planned, but not tested.

## Technology
React, TypeScript, Vite, Leaflet with OpenStreetMap map tiles.

## Run it locally

Requires [Node.js](https://nodejs.org).

```bash
git clone git@github.com:Malekkchaou01/spontaneous-plans.git
cd spontaneous-plans/app
npm install
npm run dev
```

Then open the address printed in the terminal (usually http://localhost:5173).

### Current state of the coded version

Sample data only. data is stored locally in the browser only.

![Map with activity pins](docs/images/app/01-map-with-pins.png)
*Friends' activities as pins on a map.*

![Activity details card](docs/images/app/02-activity-card.png)
*Tapping a pin shows who suggested the plan, when, where and who is interested.*

![Marked as interested](docs/images/app/03-interested.png)
*Joining is a light "I'm interested" toggle, not a binding commitment.*

![Creating an activity](docs/images/app/04-create-activity.png)
*Creating a plan: the place is chosen by tapping the map, so pins mark activity spots.*

![An activity I shared](docs/images/app/05-my-activity.png)
*An activity I shared: as the host I can remove it, and it disappears 4 hours after its start time.*