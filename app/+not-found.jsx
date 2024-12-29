import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import { Colors } from '@/constants/Colors';

export default function NotFoundScreen() {
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedText style={styles.title}>This screen doesn't exist.</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText style={styles.linkText}>Go to home screen!</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: Colors.dark.primary,
  },
});
