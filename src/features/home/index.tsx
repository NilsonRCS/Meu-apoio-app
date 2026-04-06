import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

const MENU_ITEMS = [
  {
    id: '1',
    title: 'Meditação',
    description: 'Pratique a atenção plena e o relaxamento',
    icon: 'flower-outline',
    route: 'Meditation',
  },
  {
    id: '2',
    title: 'Música',
    description: 'Sons e playlists para o seu bem-estar',
    icon: 'musical-notes-outline',
    route: 'Music',
  },
  {
    id: '3',
    title: 'Superação',
    description: 'Histórias e ferramentas para superar desafios',
    icon: 'trophy-outline',
    route: 'Overcome',
  },
  {
    id: '4',
    title: 'Ajuda',
    description: 'Recursos e suporte disponíveis para você',
    icon: 'help-circle-outline',
    route: 'Help',
  },
];

const HomeFeature = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Apoio</Text>
        <Text style={styles.subtitle}>O que você gostaria de fazer hoje?</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => navigation.navigate(item.route)}
            activeOpacity={0.7}
          >
            <View style={styles.itemIconWrapper}>
              <Ionicons name={item.icon as any} size={24} color="#708238" />
            </View>
            <View style={styles.itemText}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.border} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: '#708238',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 6,
  },
  list: {
    paddingVertical: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  itemIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f4e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 3,
  },
  itemDescription: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
});

export default HomeFeature;
