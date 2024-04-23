# React Tic-Tac-Toe

Questo è un semplice gioco del Tris realizzato con React e Vite. I giocatori possono alternarsi a segnare gli spazi in una griglia 3x3 con "X" o "O" per competere tra loro. Il gioco tiene traccia delle mosse e mostra lo stato attuale, incluso il vincitore o se il gioco finisce in parità.

## Installazione

1. Clona il repository:

```
git clone https://github.com/matteocicigoi/tic-tac-toe-react-vite.git
```

2. Naviga nella directory del progetto:

```
cd tic-tac-toe-react-vite
```

3. Installa le dipendenze:

```
npm install
```

## Utilizzo

Per avviare il server di sviluppo, esegui:

```
npm run dev
```

Questo avvierà il server di sviluppo e aprirà il gioco nel tuo browser web predefinito.

## Come Giocare

1. I giocatori si alternano a fare clic sui quadrati per segnarli con il loro simbolo ("X" o "O").
2. Il gioco passerà automaticamente da un giocatore all'altro.
3. Il gioco termina quando un giocatore ottiene tre dei suoi simboli in fila orizzontalmente, verticalmente o diagonalmente, o quando tutti i quadrati sono riempiti e nessun giocatore vince (parità).

## Struttura del Codice

- Il componente `Square` rappresenta ogni cella nella griglia di gioco. Gestisce l'evento di clic e visualizza il valore della cella.
- Il componente `Board` gestisce la logica di gioco, incluso il controllo del vincitore e il rendering della griglia di gioco.
- Il componente `Game` coordina il flusso generale del gioco, inclusa la gestione dello stato di gioco e il rendering della scacchiera di gioco e della cronologia delle mosse.

## Tecnologie Utilizzate

- React
- Vite

---

