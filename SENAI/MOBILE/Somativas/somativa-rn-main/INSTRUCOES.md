# Avaliacao Somativa — Navegacao com React Navigation

**Disciplina:** Programacao para Dispositivos Moveis (PPDM)
**Tema:** Navegacao
**Entrega:** Apresentacao para o professor ao final da aula

---

## Contexto

Voce recebeu um projeto React Native com o tema **Filmes** ja estilizado e com os hooks implementados. Sua tarefa e implementar toda a navegacao entre as telas.

```
npm install
```

---

## O que implementar

### App.js

Monte a arvore: `SafeAreaProvider` > `NavigationContainer` > `AppNavigator`

### StackNavigator.js

Registre as telas da pilha:

- `HomeScreen` com `name="Home"`
- `DetalheScreen` com `name="Detalhe"`

### TabNavigator.js

Registre as tres abas:

- `StackNavigator` com `name="Filmes"`
- `ListaScreen` com `name="Lista"`
- `PerfilScreen` com `name="Perfil"`

### HomeScreen.js

- Adicione `{ navigation }` como parametro da funcao
- No `onPress` do card, navegue ate `"Detalhe"` passando todos os dados do item

### DetalheScreen.js

- Adicione `{ route, navigation }` como parametros da funcao
- Desestruture os dados de `route?.params` usando `filmeMock` como valor padrão (?? filmeMock)
- No `onPress` do botao, alem de atualizar o estado, navegue ate a aba `"Lista"` passando os dados do filme quando ele for adicionado

### ListaScreen.js

- Adicione `{ route }` como parametro da funcao
- Utilize `useEffect` para observar `route.params` e adicionar o novo filme ao estado da lista

---

## Estrutura do projeto

```
src/
  components/
    BotaoAcao.js
    CardFilme.js
    index.js
  navigation/
    index.js        (nao editar)
    StackNavigator.js
    TabNavigator.js
  screens/
    HomeScreen.js
    DetalheScreen.js
    ListaScreen.js
    PerfilScreen.js
```
