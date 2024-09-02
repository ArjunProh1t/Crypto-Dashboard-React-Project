import { HStack, Text, Icon, Stack, Tag, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from 'react-icons/ai'

const PortfolioSection = () => {
    return (
        <HStack
            justify="space-between"
            bg="white"
            borderRadius="xl"
            p="6"
            flexDirection={{
                base: "column",
                md: "row",
            }}
            align={{
                base: "flex-start",
                xl: "center",
            }}
            spacing={{
                base: "4",
                md: "6",
                xl: "0",
            }}
        >

            <HStack spacing={{
                base: "4",
                md: "6",
                
            }}
                flexDirection={{
                base: "column",
                md: "row",
            }}
                align={{
                    base: "flex-start",
                    xl: "center",
                }}
            >
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" >Total PortFolio Value</Text>
                        <Icon as={AiOutlineInfoCircle} />
                    </HStack>
                    <Text textStyle="h2" fontWeight="medium" >₹112,312.24</Text>
                </Stack>

                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm" >Wallet Balances</Text>
                    </HStack>
                    <HStack spacing={4}>

                        <HStack>
                            <Text textStyle="h2" fontWeight="medium" >22.39401000</Text> <Tag colorScheme="gray">BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium" >₹1,300.00</Text> <Tag colorScheme="gray">INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>

            <HStack >
                <Button bg="p.purple"
                    leftIcon={<Icon as={AiOutlineArrowUp} />}>Deposit</Button>
                <Button bg="p.purple"
                    leftIcon={<Icon as={AiOutlineArrowDown} />}>Withdraw</Button>
            </HStack>
        </HStack>
    )
}

export default PortfolioSection