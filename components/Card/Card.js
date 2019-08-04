import React from 'react'
import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './Card.styles'

const Card = ({ card }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={styles.card}
  >
    <Image
      style={styles.image}
      source={card.photo}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}, ${card.age}`}
      </Text>
    </View>
  </TouchableOpacity>
)

Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }),
}

export default Card
