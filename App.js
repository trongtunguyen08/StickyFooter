import React, { useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Platform,
  StatusBar,
  Animated,
  useWindowDimensions
} from 'react-native'
import { Paragraph, Title, Headline, Text } from "react-native-paper"
import { Ionicons } from '@expo/vector-icons'


const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  `Sagittis purus sit amet volutpat consequat. Ac tortor vitae purus faucibus ornare. Id velit ut tortor pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Cursus euismod quis viverra nibh cras. Dignissim convallis aenean et tortor at risus viverra. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Eget nunc scelerisque viverra mauris in aliquam. Dui id ornare arcu odio. Interdum varius sit amet mattis vulputate enim nulla aliquet. Diam maecenas sed enim ut. Aliquet bibendum enim facilisis gravida neque convallis a cras. Porttitor leo a diam sollicitudin tempor id. Integer eget aliquet nibh praesent tristique magna. Id volutpat lacus laoreet non curabitur gravida. Dui faucibus in ornare quam viverra orci sagittis eu. Massa eget egestas purus viverra. Ut consequat semper viverra nam libero justo. Neque convallis a cras semper auctor neque vitae.`,
  `Mus mauris vitae ultricies leo integer malesuada nunc vel. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eget gravida cum sociis natoque penatibus et. Lectus proin nibh nisl condimentum id. Amet facilisis magna etiam tempor orci eu lobortis elementum. Sagittis eu volutpat odio facilisis mauris sit amet massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dictum sit amet justo donec enim diam vulputate ut. Bibendum arcu vitae elementum curabitur vitae. Nunc sed augue lacus viverra. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Diam vel quam elementum pulvinar etiam. Tempus iaculis urna id volutpat lacus.`,
  `Laoreet sit amet cursus sit amet. Consequat interdum varius sit amet mattis vulputate enim. Sit amet dictum sit amet justo donec enim diam. Enim blandit volutpat maecenas volutpat blandit. Rutrum quisque non tellus orci ac auctor augue mauris augue. Non sodales neque sodales ut etiam. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Maecenas accumsan lacus vel facilisis volutpat est. Laoreet non curabitur gravida arcu ac. Quam nulla porttitor massa id neque aliquam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Tristique senectus et netus et malesuada fames ac turpis. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Varius quam quisque id diam. Purus faucibus ornare suspendisse sed nisi lacus sed. Diam quam nulla porttitor massa id.`,
  `Pharetra massa massa ultricies mi quis hendrerit. Tortor aliquam nulla facilisi cras. Interdum posuere lorem ipsum dolor sit amet consectetur. Morbi non arcu risus quis varius quam quisque id. Lacus luctus accumsan tortor posuere ac. Consequat id porta nibh venenatis cras sed felis. Urna molestie at elementum eu facilisis. Blandit cursus risus at ultrices. Sed lectus vestibulum mattis ullamcorper. Convallis aenean et tortor at risus viverra adipiscing. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Egestas congue quisque egestas diam in arcu cursus euismod quis. Pretium lectus quam id leo. Malesuada pellentesque elit eget gravida cum. Ac placerat vestibulum lectus mauris ultrices eros in cursus.`,
  `Amet luctus venenatis lectus magna fringilla urna. Integer vitae justo eget magna fermentum. In nulla posuere sollicitudin aliquam ultrices. Viverra vitae congue eu consequat ac felis donec. Tincidunt dui ut ornare lectus sit amet est placerat in. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Sed ullamcorper morbi tincidunt ornare massa eget. Et malesuada fames ac turpis egestas sed tempus urna. Odio tempor orci dapibus ultrices in iaculis. Ac odio tempor orci dapibus ultrices in iaculis. Nunc sed id semper risus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Vulputate dignissim suspendisse in est ante in nibh.`,
  `Arcu non odio euismod lacinia at quis. Lacus sed viverra tellus in hac habitasse platea dictumst. Ornare arcu odio ut sem nulla. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Volutpat odio facilisis mauris sit amet. Arcu vitae elementum curabitur vitae nunc. Facilisi cras fermentum odio eu feugiat pretium nibh. Morbi tincidunt ornare massa eget egestas purus viverra. Turpis tincidunt id aliquet risus feugiat in ante metus. Arcu non sodales neque sodales ut etiam. Nisl tincidunt eget nullam non nisi. Augue interdum velit euismod in pellentesque massa placerat duis. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Metus aliquam eleifend mi in nulla posuere sollicitudin. Sit amet nisl suscipit adipiscing bibendum est. Auctor elit sed vulputate mi sit amet mauris. Tristique et egestas quis ipsum suspendisse ultrices. Integer eget aliquet nibh praesent. Felis eget nunc lobortis mattis aliquam faucibus purus in.`
]
const getImage = (index) => `https://source.unsplash.com/600x${400 + index}/?blackandwhite`

export default function App() {
  const { width, height } = useWindowDimensions()
  const scrollY = useRef(new Animated.Value(0)).current
  const [layoutMeasures, setLayoutMeasures] = useState(null)
  let topEdge = layoutMeasures ? (layoutMeasures?.y - height + layoutMeasures?.height) : height
  let IMAGE_HEIGHT = height * .45

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 30
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <Headline style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 30
        }}>Black and white</Headline>
        {
          paragraphs.map((item, index) => {
            return (
              <View key={index}>
                {
                  index % 3 == 0 &&
                  <Image
                    source={{ uri: getImage(index) }}
                    style={{
                      width: '100%',
                      height: IMAGE_HEIGHT,
                      marginVertical: 10,
                      borderRadius: 5
                    }}
                  />
                }
                <Paragraph style={{ paddingVertical: 5 }}>{item}</Paragraph>
              </View>
            )
          })
        }

        <View
          pointerEvents="none"
          style={{
            height: 80
          }}
          onLayout={({ nativeEvent }) => {
            setLayoutMeasures(nativeEvent.layout)
          }}
        />

        <View>
          <Title style={{
            fontWeight: 'bold',
            marginBottom: 10
          }}>Featured</Title>

          {
            paragraphs.slice(0, 3).map((item, index) => {
              return (
                <View
                  key={`feature ${index}`}
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    width: '100%'
                  }}
                >
                  <View style={{
                    width: '25%'
                  }}>
                    <Image
                      source={{ uri: getImage(index) }}
                      style={{
                        width: width * .21,
                        height: width * .21,
                        borderRadius: 5
                      }}
                    />
                  </View>
                  <View style={{
                    width: '75%'
                  }}>
                    <Paragraph numberOfLines={3}>{item}</Paragraph>
                  </View>
                </View>
              )
            })
          }
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={{
          height: 80,
          backgroundColor: '#FFF',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
                outputRange: [0, 0, 0, 0, -1]
              })
            }
          ]
        }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Ionicons
            name='sunny-outline'
            size={30}
            style={{
              paddingHorizontal: 10
            }}
          />
          <Animated.Text
            style={{
              opacity: scrollY.interpolate({
                inputRange: [-1, 0, topEdge - 30, topEdge, topEdge + 1],
                outputRange: [0, 0, 0, 1, 1]
              })
            }}
          >365</Animated.Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Animated.View
            style={{
              opacity: scrollY.interpolate({
                inputRange: [-1, 0, topEdge - 30, topEdge, topEdge + 1],
                outputRange: [0, 0, 0, 1, 1]
              })
            }}
          >
            <Ionicons
              name='share-outline'
              size={30}
              style={{
                paddingHorizontal: 10
              }}
            />
          </Animated.View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: scrollY.interpolate({
                    inputRange: [-1, 0, topEdge - 30, topEdge, topEdge + 1],
                    outputRange: [45, 45, 0, 0, 0]
                  })
                }
              ]
            }}
          >
            <Ionicons
              name='rocket-outline'
              size={30}
              color={'green'}
              style={{
                paddingHorizontal: 10
              }}
            />
          </Animated.View>
          <Animated.View
            style={{
              opacity: scrollY.interpolate({
                inputRange: [-1, 0, topEdge - 30, topEdge, topEdge + 1],
                outputRange: [0, 0, 0, 1, 1]
              })
            }}
          >
            <Ionicons
              name='ribbon-outline'
              size={30}
              style={{
                paddingHorizontal: 10
              }}
            />
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
