import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthStore } from '../../store/authStore';
import theme from '../../theme';

const ProfileFeature = () => {
  const insets = useSafeAreaInsets();
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>U</Text>
        </View>
        <Text style={styles.name}>Usuário</Text>
        <Text style={styles.email}>usuario@email.com</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#708238',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  section: {
    padding: 24,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: theme.colors.error,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: theme.colors.error,
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ProfileFeature;
