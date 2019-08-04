import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { colors, photoCards } from './constants'
import { Card, IconButton } from './components'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  swiperContainer: {
    height: height - 250,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '15%',
  },
  copyright: {
    textAlign: 'center',
    fontSize: 10,
    color: colors.black,
    paddingBottom: 20,
    fontFamily: 'Avenir',
  },
  overlayLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  overlayLabelText: {
    fontSize: 25,
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
})

const OverlayLabel = ({ label, color }) => (
  <View style={[styles.overlayLabel, { borderColor: color }]}>
    <Text style={[styles.overlayLabelText, { color }]}>{label}</Text>
  </View>
)

const App = () => {
  const swiper = useRef(null)

  const handleOnSwipedLeft = () => swiper.current.swipeLeft()
  const handleOnSwipedTop = () => swiper.current.swipeTop()
  const handleOnSwipedRight = () => swiper.current.swipeRight()

  return (
    <View
      style={styles.container}
    >
      <View style={styles.swiperContainer}>
        <Swiper
          bounces={false}
          ref={swiper}
          animateCardOpacity
          containerStyle={styles.container}
          cards={photoCards}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
          backgroundColor={colors.white}
          stackSize={2}
          infinite
          showSecondCard
          stackAnimationFriction={10}
          animateOverlayLabelsOpacity
          inputOverlayLabelsOpacityRangeX={[-width / 3, -width / 4, 0, width / 4, width / 3]}
          outputOverlayLabelsOpacityRangeX={[1, 0, 0, 0, 1]}
          overlayLabels={{
            left: {
              title: 'NOPE',
              element: <OverlayLabel label="NOPE" color={colors.nope} />,
              style: {
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: 'LIKE',
              element: <OverlayLabel label="LIKE" color={colors.like} />,
              style: {
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={handleOnSwipedLeft}
          color={colors.white}
          backgroundColor={colors.nope}
        />
        <IconButton
          name="star"
          onPress={handleOnSwipedTop}
          color={colors.white}
          backgroundColor={colors.favorite}
        />
        <IconButton
          name="heart"
          onPress={handleOnSwipedRight}
          color={colors.white}
          backgroundColor={colors.like}
        />
      </View>
      <View style={styles.swipeTextContainer}>
        <Text
          style={styles.copyright}
        >
            All pictures were taken freerly from Unsplash.com.
            Names on the Photos are the names of photographers who took pictures.
        </Text>
      </View>
    </View>
  )
}

export default App
