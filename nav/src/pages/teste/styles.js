import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize:24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    color: colors.light,
    fontSize: 14,
    lineHeight: 21,
  },

  form: {
    marginTop: metrics.baseMargin * 2,

  },

  input: {

    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.baseMargin,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'


  },

  buttontext:
  {
    color: colors.white
  }

  
});

export default styles;