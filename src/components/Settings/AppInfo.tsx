import React from 'react';
import { Text, View, Linking } from 'react-native';

const AppInfo = () => (
  <View className="w-full flex flex-col h-full pt-2 px-4">
    <Text className="text-3xl">Informazioni Sull'App</Text>
    <View className="py-4">
      <Text className="text-2xl">Versione App</Text>
      <Text className="text-lg">0.1.0</Text>
    </View>
    <View className="py-4">
      <Text className="text-2xl">Copyright</Text>
      <Text className="text-lg">Copyright © CHRISTIAN VISINTIN 2024</Text>
      <Text className="text-lg">Distribuita sotto licenza Apache-2.0</Text>
    </View>
    <View className="py-4">
      <Text className="text-2xl">Sviluppata da</Text>
      <Text className="text-lg">Christian Visintin</Text>
      <Text
        className="text-brand underline text-lg"
        onPress={() => Linking.openURL('https://veeso.dev/')}>
        www.veeso.dev
      </Text>
      <Text
        className="text-brand underline text-lg"
        onPress={() => Linking.openURL('mailto:info@veeso.dev')}>
        info@veeso.dev
      </Text>
      <Text
        className="text-brand underline text-lg"
        onPress={() => Linking.openURL('tel:+393792615635')}>
        379 261 5635
      </Text>
    </View>
    <View className="py-4">
      <Text className="text-2xl">Supporto</Text>
      <Text
        className="text-lg text-brand underline"
        onPress={() => Linking.openURL('https://t.me/+7n_enM4sRA05MmQ0')}>
        Telegram
      </Text>
      <Text
        className="text-lg text-brand underline"
        onPress={() => Linking.openURL('mailto:info@bitcoinmonfalcone.it')}>
        info@bitcoinmonfalcone.it
      </Text>
      <Text
        className="text-lg text-brand underline"
        onPress={() => Linking.openURL('https://satoshispay.app/support')}>
        Sito web
      </Text>
    </View>
  </View>
);

export default AppInfo;