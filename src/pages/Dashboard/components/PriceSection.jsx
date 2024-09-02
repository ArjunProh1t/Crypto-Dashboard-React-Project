import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from '@chakra-ui/react';
import { CustomCard } from '../../../chakra/CustomCard';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const PriceSection = () => {

    const timestamps = ["7:15 PM", "7:25 PM", "7:35 PM", "7:45 PM", "7:55 PM"];

    return (
        <CustomCard>
            <Flex justify="space-between" align="start">
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" >Current Prices</Text>
                    </HStack>
                    <HStack spacing={4}>

                        <HStack>
                            <Text textStyle="h2" fontWeight="medium" >22.39401000</Text>
                            <HStack fontWeight="medium" color="green.500">
                                <Icon as={FaArrowTrendUp} />
                                <Text fontSize="sm" fontWeight="medium" >22%</Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </Stack>
                <HStack >
                    <Button bg="p.purple"
                        leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
                    <Button bg="p.purple"
                        leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
                </HStack>
            </Flex>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <Flex justify="end">
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image width="auto" src="/graph.svg" mt="3rem" />
                        <HStack justify="space-between">
                            {timestamps.map((timestamp) => (
                                <Text
                                    key={timestamp}
                                    fontSize="sm"
                                    color="black.80"
                                >
                                    {timestamp}
                                </Text>
                            ))}
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </CustomCard>
    )
}

export default PriceSection