// Importa componentes básicos do React Native
import { StyleSheet, Text, View } from "react-native";

// Componente principal da tela de perfil
export default function DesafioPerfil() {
  return (
    // Container principal (ocupa toda a tela)
    <View style={styles.container}>

      {/* Cabeçalho (título da tela) */}
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Meu Perfil</Text>
      </View>

      {/* Seção do avatar (foto + nome) */}
      <View style={styles.avatarSection}>
        {/* Espaço da imagem (placeholder) */}
        <View style={styles.avatarPlaceholder}></View>
        {/* Nome do usuário */}
        <Text style={styles.avatarName}>João Silva</Text>
      </View>

      {/* Seção de estatísticas */}
      <View style={styles.statsSection}>
        {/* Caixa de posts */}
        <View style={[styles.statBox, styles.statGreen]}>
          <Text style={styles.statText}>120 Posts</Text>
        </View>

        {/* Caixa de seguidores */}
        <View style={[styles.statBox, styles.statOrange]}>
          <Text style={styles.statText}>500 Seguidores</Text>
        </View>

        {/* Caixa de seguindo */}
        <View style={[styles.statBox, styles.statRed]}>
          <Text style={styles.statText}>300 A seguir</Text>
        </View>
      </View>

      {/* Área principal (menu lateral + galeria) */}
      <View style={styles.feedSection}>
        {/* Menu lateral */}
        <View style={styles.sideMenu}>
          <Text style={styles.blackText}>Menu Lateral</Text>
        </View>

        {/* Área de conteúdo (galeria) */}
        <View style={styles.gallery}>
          <Text style={styles.blackText}>Galeria</Text>
        </View>
      </View>

      {/* Rodapé (navegação) */}
      <View style={styles.footerBox}>
        <Text style={styles.footerText}>
          Home | Pesquisa | Definições
        </Text>
      </View>
    </View>
  );
}

// Estilos da aplicação
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1, // ocupa toda a tela
    gap: 8,  // espaço entre os elementos
  },

  // ---- TEXTOS ----
  headerText: {
    color: "white",
    fontWeight: "bold",
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
  },
  statText: {
    color: "white",
    textAlign: "center",
  },
  blackText: {
    color: "black",
    fontWeight: "bold",
  },
  avatarName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },

  // ---- CABEÇALHO ----
  headerBox: {
    height: 60, // altura fixa
    backgroundColor: "purple",
    justifyContent: "center", // centraliza vertical
    alignItems: "center",     // centraliza horizontal
  },

  // ---- AVATAR ----
  avatarSection: {
    flex: 1, // ocupa espaço proporcional
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholder: {
    height: 100,
    width: 100,
    backgroundColor: "#5f5f5f",
    borderRadius: 8, // bordas arredondadas
  },

  // ---- ESTATÍSTICAS ----
  statsSection: {
    height: 80,
    flexDirection: "row", // elementos lado a lado
    gap: 8,
  },
  statBox: {
    flex: 1, // cada caixa ocupa espaço igual
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  statGreen: {
    backgroundColor: "green",
  },
  statOrange: {
    backgroundColor: "orange",
  },
  statRed: {
    backgroundColor: "red",
  },

  // ---- CONTEÚDO PRINCIPAL ----
  feedSection: {
    flex: 2, // ocupa mais espaço que o avatar
    flexDirection: "row",
    gap: 8,
  },
  sideMenu: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  gallery: {
    flex: 3, // maior que o menu lateral
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  // ---- RODAPÉ ----
  footerBox: {
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});