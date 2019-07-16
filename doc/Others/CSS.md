
## FlexBox

## Grid

```
.appContainer {
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 30px 30px minmax(400px, auto) 30px;
  grid-template-areas: 
    "header"
    "nav"
    "content"
    "footer";
}

@media (min-width: 500px) {
  .appContainer {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 30px minmax(400px, auto) 30px;
    grid-template-columns: 150px minmax(200px, auto);
    grid-template-areas: 
      "header  header"
      "nav     content"
      "footer      footer";
  }
}
```
