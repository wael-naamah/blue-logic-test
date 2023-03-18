import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

import ProductItem from './ProductItem';

import theme from '../styles/theme.style';
const {width} = Dimensions.get('window');

const BestSellerList = () => {
  const carouselItems = [
    {
      id: 1,
      title: 'Buy a blue cotton hoodie',
      price: 'AED 100',
      image: require('../assets/home/item.png'),
    },
    {
      id: 2,
      title: 'Buy a blue cotton hoodie',
      price: 'AED 90',
      image: require('../assets/home/item.png'),
    },
    {
      id: 3,
      title: 'Buy a blue cotton hoodie',
      price: 'AED 130',
      image: require('../assets/home/item.png'),
    },
    {
      id: 4,
      title: 'Buy a blue cotton hoodie',
      price: 'AED 150',
      image: require('../assets/home/item.png'),
    },
    {
      id: 5,
      title: 'Buy a blue cotton hoodie',
      price: 'AED 50',
      image: require('../assets/home/item.png'),
    },
  ];

  const _renderItem = ({item, index}) => {
    return <ProductItem item={item} />;
  };

  return (
    <View style={{marginTop: 50 * theme.BW}}>
      <View style={styles.carousel}>
        <Carousel
          layout={'default'}
          data={carouselItems}
          sliderWidth={width - 100 * theme.BW}
          itemWidth={width - 100 * theme.BW}
          renderItem={_renderItem}
        />
      </View>
    </View>
  );
};

export default BestSellerList;

const styles = StyleSheet.create({
  carousel: {flex: 1, flexDirection: 'row', justifyContent: 'center'},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 5,
    height: 110 * theme.BW,
    padding: 10 * theme.BW,
    marginLeft: 20 * theme.BW,
    marginRight: 20 * theme.BW,
  },
  itemDetails: {
    marginLeft: 15 * theme.BW,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#686869',
  },
  price: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
  qty: {marginHorizontal: 10},
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
