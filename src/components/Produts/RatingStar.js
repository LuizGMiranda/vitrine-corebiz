import Stars from 'simple-rating-stars';

function RatingStar({value}) {
  return (
    <Stars
        stars={value}
        outOf={5}
        full={'#F8475F'}
        empty={'#fff'}
        stroke={'#F8475F'}
    />
  );
}

export default RatingStar;