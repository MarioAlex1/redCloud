import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { PaymentStyles } from "../../src/styles/payment.styles";
import { usePayment } from "./_hook/usePayment";
import { PaymentMethod } from "./PaymentMethod";

export default function PaymentScreen() {
  const {
    selectedMethod,
    setSelectedMethod,
    giftCode,
    setGiftCode,
    methods,
    handlePay,
  } = usePayment();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
      <Text style={PaymentStyles.title}>Forma de Pagamento</Text>

      <View style={PaymentStyles.giftContainer}>
        <Text style={PaymentStyles.label}>Código do cartão-presente</Text>

        <TextInput
          style={PaymentStyles.input}
          placeholder="Digite o código"
          placeholderTextColor="#666"
          value={giftCode}
          onChangeText={setGiftCode}
        />
      </View>

      <View style={PaymentStyles.methodsContainer}>
        {methods.map((method) => (
          <PaymentMethod
            key={method.id}
            id={method.id}
            label={method.label}
            selected={selectedMethod === method.id}
            onPress={() => setSelectedMethod(method.id)}
          />
        ))}
      </View>

      <View style={PaymentStyles.paymentContainer}>
        <Text style={PaymentStyles.totalText}>Total</Text>

        <View style={PaymentStyles.payRow}>
          <Text style={PaymentStyles.price}>R$ 10,00</Text>

          <TouchableOpacity
            style={[
              PaymentStyles.payButton,
              !selectedMethod && { opacity: 0.5 },
            ]}
            disabled={!selectedMethod}
            onPress={handlePay}
          >
            <Text style={PaymentStyles.payButtonText}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}