import { Box, Flex, Icon, Text, Stack, Grid, Divider, Button } from '@chakra-ui/react';
import { CustomCard } from '../../../chakra/CustomCard';
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaBtc } from 'react-icons/fa6';
import { Fragment } from 'react';

const Transactions = () => {
    const transactions = [
        {
            id: "1",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM"
        },
        {
            id: "2",
            icon: FaBtc,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timestamp: "2022-05-27 12:32 PM"
        },
        {
            id: "3",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM"
        },
    ];
    return (
        <CustomCard h="full">
            <Text fontSize="sm" color="black.80" mb="6">Recent Transactions</Text>
            <Stack gap={4}>
                {transactions.map((transaction, i) => (
                    <Fragment key={transaction.id}>
                        { i!= 0 && <Divider />}
                        <Flex key={transaction.id} gap="6" width="full">
                            <Grid placeItems="center" bg="black.5" boxSize="10" borderRadius="full" >
                                <Icon as={transaction.icon} />
                            </Grid>
                            <Flex justify="space-between" width="full">
                                <Stack spacing={0}>
                                    <Text color="black.80" textStyle="h6">{transaction.text}</Text>
                                    <Text fontSize="sm" color="black.40">{transaction.timestamp}</Text>
                                </Stack>
                                <Text color="black.80" textStyle="h6">{transaction.amount}</Text>
                            </Flex>
                        </Flex>
                    </Fragment>
                ))}
            </Stack>
            <Button w="full" colorScheme='gray'>
                View All
            </Button>
        </CustomCard>
    )
}

export default Transactions;