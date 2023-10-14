export const MainRecomentGroupCard = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ marginHorizontal: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Heading fontSize={20}>추천 재단</Heading>
          <Heading color={Color.Secondary_60} fontSize={18}>
            GIVE가 추천해드립니다.
          </Heading>
        </View>
        <ScrollView horizontal={true}>
          <GroupCard />
        </ScrollView>
      </View>
    );
  };
  