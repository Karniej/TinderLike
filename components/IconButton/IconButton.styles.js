import { StyleSheet } from 'react-native'
import { colors } from '../../constants'

export default StyleSheet.create({
  singleButton: {
    backgroundColor: colors.transparent,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    padding: 15,
  },
})
