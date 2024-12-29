import { SafeAreaView, StyleSheet, View, Pressable, Image } from 'react-native'
import React from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import MainButton from '../components/MainButton'

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.content}>

        <View style={styles.header}>
          <Pressable 
            onPress={() => navigation.openDrawer()}
            style={styles.backButton}
          >
            <Ionicons name="menu" size={28} color={Colors.dark.text} />
          </Pressable>
          <ThemedText style={styles.headerTitle}>Profile</ThemedText>
          <View style={styles.headerRight} />
        </View>


        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <ThemedText style={styles.avatarText}>SR</ThemedText>
            </View>
            <View style={styles.rankIndicator}>
              <ThemedText style={styles.rankText}>Rank 3</ThemedText>
            </View>
          </View>
          <ThemedText style={styles.timeJoined}>3 years 6 months</ThemedText>
          <ThemedText style={styles.username}>aliyusifow</ThemedText>
        </View>


        <View style={styles.actionButtons}>
          <Pressable 
            style={[styles.actionButton, styles.depositButton]} 
            onPress={() => navigation.navigate('deposit')}
          >
            <Ionicons name="arrow-down-circle-outline" size={24} color="#4CAF50" />
            <ThemedText style={[styles.actionButtonText, styles.depositText]}>Deposit</ThemedText>
          </Pressable>
          
          <Pressable 
            style={[styles.actionButton, styles.withdrawButton]} 
            onPress={() => navigation.navigate('withdraw')}
          >
            <Ionicons name="arrow-up-circle-outline" size={24} color="#FF1493" />
            <ThemedText style={[styles.actionButtonText, styles.withdrawText]}>Withdraw</ThemedText>
          </Pressable>
        </View>


        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="chatbubbles-outline" size={24} color={Colors.dark.text} />
            <ThemedText style={styles.sectionTitle}>Chat Activity</ThemedText>
            <ThemedText style={styles.sectionSubtitle}>1/5</ThemedText>
            <View style={styles.badge}>
              <ThemedText style={styles.badgeText}>Junior</ThemedText>
            </View>
          </View>
        </View>


        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="stats-chart-outline" size={24} color={Colors.dark.text} />
            <ThemedText style={styles.sectionTitle}>Statistics</ThemedText>
          </View>
          
          <View style={styles.statsGrid}>
            <View style={styles.statsRow}>
              <View style={[styles.statBox, styles.statBoxHalf]}>
                <ThemedText style={styles.statLabel}>Total Wager</ThemedText>
                <View style={styles.statValue}>
                  <Ionicons name="logo-usd" size={20} color="#4CAF50" />
                  <ThemedText style={styles.statAmount}>$15,452.32</ThemedText>
                </View>
              </View>
              
              <View style={[styles.statBox, styles.statBoxHalf]}>
                <ThemedText style={styles.statLabel}>Total Bets</ThemedText>
                <ThemedText style={styles.statAmount}>161,019</ThemedText>
              </View>
            </View>

            <View style={styles.statBox}>
              <ThemedText style={styles.statLabel}>Earned Staking</ThemedText>
              <View style={styles.statValue}>
                <Ionicons name="logo-usd" size={20} color="#4CAF50" />
                <ThemedText style={styles.statAmount}>$2.74</ThemedText>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="rocket-outline" size={24} color={Colors.dark.text} />
            <ThemedText style={styles.sectionTitle}>Activity</ThemedText>
          </View>
          
          <View style={styles.activityGrid}>
            <View style={styles.activityBox}>
              <ThemedText style={styles.activityLabel}>Total Tips</ThemedText>
              <View style={styles.statValue}>
                <Ionicons name="logo-usd" size={20} color="#4CAF50" />
                <ThemedText style={styles.statAmount}>$0.00</ThemedText>
              </View>
            </View>
            
            <View style={styles.activityBox}>
              <ThemedText style={styles.activityLabel}>Total Rains</ThemedText>
              <View style={styles.statValue}>
                <Ionicons name="logo-usd" size={20} color="#4CAF50" />
                <ThemedText style={styles.statAmount}>$0.00</ThemedText>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    width: 44,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  rankIndicator: {
    position: 'absolute',
    bottom: -10,
    backgroundColor: '#FF1493',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rankText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  timeJoined: {
    color: '#888',
    marginBottom: 4,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  section: {
    backgroundColor: '#131243',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    flex: 1,
  },
  sectionSubtitle: {
    color: '#888',
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#2C2C54',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statsGrid: {
    gap: 12,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    backgroundColor: '#1A1A35',
    padding: 12,
    borderRadius: 12,
  },
  statBoxHalf: {
    flex: 1,
  },
  statLabel: {
    color: '#888',
    marginBottom: 4,
  },
  statValue: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  activityBox: {
    flex: 1,
    backgroundColor: '#1A1A35',
    padding: 12,
    borderRadius: 12,
  },
  activityLabel: {
    color: '#888',
    marginBottom: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  depositButton: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  withdrawButton: {
    backgroundColor: 'rgba(255, 20, 147, 0.1)',
    borderWidth: 1,
    borderColor: '#FF1493',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  depositText: {
    color: '#4CAF50',
  },
  withdrawText: {
    color: '#FF1493',
  },
});