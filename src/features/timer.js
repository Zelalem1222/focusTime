import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/CountDown';
import { Timing } from './Timeing';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/size';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
  5 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject , clearSubject , onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setProgress(1)
    setIsStarted(false)
    reset()
    onTimerEnd(focusSubject)
  }


  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.lg }}>
          <Text style={styles.title}>Focus On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.white}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timinWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearButton}>
      <RoundedButton size={50} title='-' onPress={clearSubject}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timinWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.lg,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    paddingTop: spacing.sm ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    flexDirection: 'row',
   justifyContent: 'center'
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
