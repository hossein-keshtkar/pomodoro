export const timeDestructurer = (isSessionTime, sessionTime, breakTime) => {
  const minutes = parseInt(isSessionTime ? sessionTime / 60 : breakTime / 60);
  const seconds = isSessionTime ? sessionTime % 60 : breakTime % 60;

  return { minutes, seconds };
};
