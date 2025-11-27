import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { SearchStyles } from "../styles/searchStyles";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function SearchPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView
        style={SearchStyles.screen}
        contentContainerStyle={{ paddingBottom: 120 }}
      >

        {/* Barra de pesquisa */}
        <View style={SearchStyles.searchBar}>
          <TextInput
            placeholder="Buscar anime..."
            placeholderTextColor="#aaa"
            style={SearchStyles.searchInput}
          />

          <TouchableOpacity style={SearchStyles.voiceButton}>
            <Feather name="mic" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={SearchStyles.titleContainer}>
          <Text style={SearchStyles.title}>Mais Pesquisados</Text>
        </View>

        {/* Lista */}
        <View style={SearchStyles.listContainer}>

          {/* Narutin */}
          <View style={SearchStyles.listItem}>
            <Image source={require("../assets/images/narutin.png")} style={SearchStyles.itemImage} />
            <Text style={SearchStyles.itemTitle}>Naruto</Text>
            <TouchableOpacity>
              <AntDesign name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* One Piece */}
          <View style={SearchStyles.listItem}>
            <Image source={require("../assets/images/one-piece.png")} style={SearchStyles.itemImage} />
            <Text style={SearchStyles.itemTitle}>One Piece</Text>
            <TouchableOpacity>
              <AntDesign name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Gachiakuta */}
          <View style={SearchStyles.listItem}>
            <Image source={require("../assets/images/gachakuta.png")} style={SearchStyles.itemImage} />
            <Text style={SearchStyles.itemTitle}>Gachiakuta</Text>
            <TouchableOpacity>
              <AntDesign name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Jujutsu Kaisen */}
          <View style={SearchStyles.listItem}>
            <Image source={require("../assets/images/jujutsu-kaisen.png")} style={SearchStyles.itemImage} />
            <Text style={SearchStyles.itemTitle}>Jujutsu Kaisen</Text>
            <TouchableOpacity>
              <AntDesign name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Chainsaw Man */}
          <View style={SearchStyles.listItem}>
            <Image source={require("../assets/images/chainsaw.png")} style={SearchStyles.itemImage} />
            <Text style={SearchStyles.itemTitle}>Chainsaw Man</Text>
            <TouchableOpacity>
              <AntDesign name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Attack on Titan */}
          <View style={SearchStyles.listItem}>
            <Image source={require("../assets/images/attack-titan.png")} style={SearchStyles.itemImage} />
            <Text style={SearchStyles.itemTitle}>Attack on Titan</Text>
            <TouchableOpacity>
              <AntDesign name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* One Punch Man */}
          <View style={SearchStyles.listItem}>
            <Image source={require("../assets/images/one-punch-man.png")} style={SearchStyles.itemImage} />
            <Text style={SearchStyles.itemTitle}>One Punch Man</Text>
            <TouchableOpacity>
              <AntDesign name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Your Name */}
          <View style={SearchStyles.listItem}>
            <Image source={require("../assets/images/your-name.png")} style={SearchStyles.itemImage} />
            <Text style={SearchStyles.itemTitle}>Your Name</Text>
            <TouchableOpacity>
              <AntDesign name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </View>
  );
}
