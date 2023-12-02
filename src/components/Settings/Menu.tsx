import React from 'react';
import { ScrollView, Text } from 'react-native';

import { SettingsPage } from '../../pages/Settings';
import MenuButton from './Menu/MenuButton';
import { AlertTriangle, Edit, Info } from 'react-native-feather';

interface Props {
  onPageChange: (page: SettingsPage) => void;
}

const Menu = ({ onPageChange }: Props) => (
  <ScrollView className="py-8 w-page mx-auto">
    <Text className="text-3xl">Impostazioni</Text>
    <MenuButton
      onClick={() => onPageChange(SettingsPage.BACKUP_PHRASE)}
      icon={<Edit className="text-brandAlt" />}
      text="Backup Frase Segreta"
    />
    <MenuButton
      onClick={() => onPageChange(SettingsPage.APP_INFO)}
      icon={<Info className="text-brandAlt" />}
      text="Informazioni Sull'App"
    />
    <MenuButton
      icon={<AlertTriangle className="text-brandAlt" />}
      onClick={() => onPageChange(SettingsPage.RESTORE_APP)}
      text="Ripristino App"
    />
  </ScrollView>
);

export default Menu;
