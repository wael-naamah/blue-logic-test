import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../styles/theme.style';
import SoldRate from './SoldRate';
import BestSellerList from './BestSellerList';

const Main = () => {
  return (
    <View style={styles.content}>
      <View style={styles.innerView}>
        <SoldRate sold={430} total={1000} />
        <View style={styles.promo}>
          <View style={styles.iconsContainer}>
            <Image
              source={require('../assets/home/share.png')}
              style={styles.icon}
            />
            <Image
              source={require('../assets/heart.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.promoTextContainer}>
            <Text style={[styles.label, styles.promoLine1]}>
              get a chance to <Text style={styles.win}>WIN</Text> A
            </Text>
            <Text style={[styles.label, styles.promoLine2]}>
              Bentley Continental
            </Text>
          </View>
          <View style={styles.carContainer}>
            <Image
              source={require('../assets/home/car.png')}
              style={styles.car}
            />
          </View>
        </View>
        <BestSellerList />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
  },
  innerView: {
    minHeight: 300 * theme.BW,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 25 * theme.BW,
    paddingBottom: 25 * theme.BW,
    zIndex: 1,
  },
  promo: {
    backgroundColor: '#f7f5f8',
    height: 180 * theme.BW,
    borderTopRightRadius: 25 * theme.BW,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginVertical: 10 * theme.BW,
    marginHorizontal: 15 * theme.BW,
  },
  icon: {
    width: 20 * theme.BW,
    height: 20 * theme.BW,
    marginLeft: 20 * theme.BW,
    resizeMode: 'contain',
    tintColor: '#464646',
  },
  promoTextContainer: {alignSelf: 'flex-end'},
  label: {
    fontWeight: 'bold',
    color: '#102654',
    textAlign: 'right',
  },
  promoLine1: {
    fontSize: 16,
    marginEnd: 30 * theme.BW,
  },
  promoLine2: {
    fontSize: 19,
    marginEnd: 60 * theme.BW,
  },
  win: {
    color: '#E03A3F',
  },
  carContainer: {
    marginLeft: 'auto',
    right: -50,
  },
  car: {
    alignSelf: 'flex-end',
    width: 260 * theme.BW,
    height: 150 * theme.BW,
  },
});
