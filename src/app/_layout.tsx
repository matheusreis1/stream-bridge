
import React from 'react';
import { Stack } from 'expo-router';
import { TracksToCreateProvider } from '@/context/TracksToCreate';

export default function LayoutPage() {
  return (
    <TracksToCreateProvider >
      <Stack initialRouteName="index" screenOptions={{headerShown: false}}>
      </Stack>
    </TracksToCreateProvider>
  );
}
