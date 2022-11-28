// for (const [key, value] of categoryMap) {
//   console.log(`${key}: ${value}`);
// }

// console.log(categoryMap);

// for (const item of iterator1) {
//   console.log(item);
// }
// console.log(iterator1);

// const keys = Object.keys("smartphones");

// print all keys

// console.log(keys);

// console.log(map1.get("smartphones").push(20));
// console.log(map1.get("smartphones"));
// console.log(map1);
// setCategories();
// data.map((ele) => {
//   return (
//     <div key={ele.id}>
//       <h2>{ele.name}</h2>
//       <p>{ele.description}</p>
//     </div>
//   );
// });

{
  /* {Object.keys(categoryMap.keys).map((key, index) => {
          console.log(key);
          return (
            <div key={index}>
              <h2>
                {key}: {employee[key]}
              </h2>
  
              <hr />
            </div>
          );
        })}
  
        <br />
        <br />
        <br /> */
}

{
  /* 👇️ iterate object VALUES */
}
{
  /* {Object.values(categoryMap).map((value, index) => {
          return (
            <div key={index}>
              <h2>{value}</h2>
  
              <hr />
            </div>
          );
        })} */
}

// var myObject = { a: 1, b: 2, c: 3 };

// returns a new object with the values at each key mapped using mapFn(value)
// function objectMap(object, mapFn) {
//   return Object.keys(object).reduce(function (result, key) {
//     result[key] = mapFn(object[key]);
//     return result;
//   }, {});
// }

// var newObject = objectMap(myObject, function (value) {
//   return value * 2;
// });

// console.log(newObject);

{
  (function () {
    for (const item of iterator1) {
      // console.log(item, count++);
      item.map((data) => {
        // console.log(data);
        // return data.map((ele) => {
        //   console.log(ele);
        //   return (
        //     <div key={ele.id}>
        //       <h2>{ele.name}</h2>
        //       <p>{ele.description}</p>
        //     </div>
        //   );
        // });
      });
    }
  })();
}

// {categoryData.map((categoryElement) => {
//   return (
//     <div className="m-10" key={categoryElement[0]}>
//       <h1 className="font-semibold bg-gray-800 p-5 rounded-md capitalize text-white mb-5 text-4xl text-center">
//         {categoryElement[0]}
//       </h1>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1150: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//           1500: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//         }}
//         navigation={true}
//         modules={[Navigation]}
//         className="mySwiper h-full"
//       >
//         {categoryElement[1].map((element) => {
//           return (
//             <SwiperSlide key={element.id} className="h-auto ">
//               <Card data={element} />
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// })}
