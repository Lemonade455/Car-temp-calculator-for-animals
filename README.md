# Biltemperatur för djur

Ett webbverktyg som uppskattar temperaturen i en bil baserat på:

- Utomhustemperatur
- Tid i bilen
- Solljus (soligt, halvsoligt, skuggigt)
- Om fönstren är öppna eller stängda

Appen körs i en Docker-container och är åtkomlig via både `localhost` och en valfri IP-adress (t.ex. `http://10.0.0.66:5000`).

## Funktioner

- Välj temperatur från en rullgardinsmeny eller ange manuellt
- Välj solljusnivå
- Ange tid i bilen (dropdown eller eget värde)
- Se uppskattad inomhustemperatur med öppna eller stängda fönster
- Responsiv design – fungerar på mobil och dator

## Kom igång

1. Bygg och starta containern:

```bash
docker compose up --build -d
```

2. Öppna i webbläsaren:

- `http://localhost:5000`
- eller t.ex. `http://10.0.0.66:5000` från annan enhet i nätverket

---

# Car Temperature Calculator for Animals

A web tool that estimates the temperature inside a car based on:

- Outside temperature
- Time spent in the car
- Sunlight level (sunny, partial, shaded)
- Whether the windows are open or closed

The app runs in a Docker container and is accessible via `localhost` or a set IP like `http://10.0.0.66:5000`.

## Features

- Select temperature from a dropdown or enter manually
- Choose sunlight condition
- Set time in car (dropdown or custom value)
- Calculates estimated inside temperature with windows open or closed
- Mobile and desktop friendly

## Getting Started

1. Build and start the container:

```bash
docker compose up --build -d
```

2. Open in browser:

- `http://localhost:5000`
- or e.g. `http://10.0.0.66:5000` from another device in your network