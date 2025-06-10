import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: theme.colors.primary,
  },
  input: {
    width: '100%',
    maxWidth: 320,
    height: 48,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
    color: theme.colors.text,
  },
  error: {
    color: theme.colors.error,
    marginBottom: 16,
  },
  link: {
    color: theme.colors.primary,
    marginTop: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default styles; 