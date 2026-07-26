# Fa venir SALIVERA · Model de dades v1.0

## Principis

- Cada mòdul funciona de manera independent.
- Les relacions entre restaurants, receptes, vins, botigues i experiències són opcionals.
- Cap apartat buit es mostra a la fitxa.
- Els elements tancats no s’eliminen: es conserven com a arxiu personal.

## Camps nous comuns a restaurants, botigues i experiències

```js
{
  estat: "actiu", // actiu | temporal | tancat
  dataBaixa: "",  // opcional
  motiuBaixa: "", // opcional
  imatge: "",     // fotografia principal
  imatges: [],     // fotografies addicionals
  categories: []   // múltiples categories
}
```

## Valoració personal d’un restaurant

```js
valoracio: {
  menjar: 0,       // 1-5
  servei: 0,       // 1-5
  local: 0,        // 1-5
  preu: 0,         // relació qualitat-preu, 1-5
  tornaria: "",   // segur | sense_pressa | no
  comentari: ""
}
```

## Recomanacions d’altres persones

```js
recomanacions: [
  {
    nom: "Nom de la persona",
    data: "2026-07-26",
    menjar: 5,
    servei: 4,
    local: 4,
    preu: 5,
    tornaria: "segur",
    comentari: "Comentari opcional"
  }
]
```

La mateixa persona pot modificar la seva valoració; idealment es manté una sola valoració activa per persona i restaurant.

## Visites

```js
visites: [
  {
    data: "2026-07-26",
    ambQui: "",
    motiu: "",
    preuPersona: "",
    comentari: ""
  }
]
```

## Relacions opcionals

Una recepta o un vi només inclourà una relació quan existeixi realment:

```js
restaurantRelacionat: "Nom o identificador del restaurant"
```
