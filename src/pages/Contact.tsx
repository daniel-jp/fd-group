import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Textarea,
    useToast,
    VStack,
    Wrap,
    WrapItem
} from '@chakra-ui/react'; import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/rubik-moonrocks/400.css'; 
import emailjs from '@emailjs/browser';
import { EnvelopeSimple, Globe, LinkedinLogo, MapPinLine, Phone, TwitterLogo, User } from 'phosphor-react';
import React, {useRef, useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Layout from '../layout/Layout';
import ScrollReveal from 'scrollreveal';
const sr = ScrollReveal();

function Contact() {


    useEffect(() => {

        sr.reveal('.contactf', {
            rotate: {x: 0, y: 20, z: 0},
            duration: 800,

        },);


    }, []);



    const { t } = useTranslation();

    const toast = useToast();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
      const [message, setmessage] = useState('');

    const form = useRef();

    function sendEmail({e}:any) {
        //  e.preventDefault();

        console.log(form.current);
         const templateparams = {
             from_name: name + ' ' + email,
             to_name: email,
             message: message
        };
 
        emailjs
            .sendForm('service_o6ymppj', 'template_j01g3ha', form.current, 'VYtbYRJVHvmxoHbpp')

            .then(
               (result) => {
                    toast({
                        position: 'bottom-right',
                        status: 'success',
                        title: 'Mensagem enviada'
                    });
                    console.log('Message sent');
                },

               ( error ) => {
                    toast({
                        position: 'bottom-right',
                        status: 'error',
                        title: 'Mensagem enviada'
                    });
                    console.log('Error to sent!');
                }
            );
    }

    return (
<Layout>
    <Flex maxW="full" pb={30} className='contactf' visibility={'hidden'}>
        <Box color="white" borderRadius="lg" m={{ sm: 1, md: 6, lg: 8 }} p={{ sm: 1, md: 5, lg: 6 }}>
            <Box>
                <Wrap maxW={'full'} justify={'space-between'} spacing={{ base: 10, sm: 3, md: 5, lg: 10 }}>
                    <WrapItem>
                        <Box>
                            <Heading fontFamily={"'Rubik Moonrocks', sans-serif"} color={'gray.800'} p={1}>
                                {t('ContactFormH')}
                            </Heading>
                            <Text p={1} mt={{ sm: 3, md: 3, lg: 5 }} color="gray.600">
                                {t('ContactText0')}
                            </Text>

                            <Box color={'gray.600'}>
                                <VStack spacing={3} alignItems="flex-start">
                                    <Box display={'flex'} p={1} fontSize={{ base: '1xl', sm: '1xl' }}>
                                        <Phone color="#4299e1" size={30} />
                                        <Text p={2} w={{ base: 180, sm: 200, md: 250, lg: 330 }}>
                                            +244 931 901 243 & +244 927 538 808
                                        </Text>
                                    </Box>

                                    <Box p={1} display={'flex'} alignContent={'space-between'} fontSize={{ base: '1xl', sm: '1xl' }}>
                                        <EnvelopeSimple color="#4299e1" size={30} />
                                        <Text p={2} w={{ base: 200, sm: 200, md: 250, lg: 200 }}>
                                            info@fdgroup.company
                                        </Text>
                                    </Box>

                                    <Box display={'flex'} pt={2} p={1} width="350px">
                                        <MapPinLine color="#4299e1" size={30} />
                                        <Text p={2} w={{ base: 200, sm: 250, md: 300, lg: 350 }}>
                                            10 rue liberté Etg 3 Apt 5 CA Al Hiba, Casablanca & Distrito Ingombota Rua Bartolomeu Dias Zona 4 Casa N 1 Luanda / Angola
                                        </Text>
                                    </Box>
                                </VStack>
                            </Box>

                            <HStack mt={{ lg: 5, md: 5 }} spacing={5} px={5} alignItems="flex-start">
                                <IconButton aria-label="facebook" variant="ghost" size="lg" isRound={true} _hover={{ bg: 'red.800' }} icon={<LinkedinLogo size="28px" />} />
                                <IconButton aria-label="github" variant="ghost" size="lg" isRound={true} _hover={{ bg: 'red.800' }} icon={<TwitterLogo size="28px" />} />
                                <IconButton aria-label="discord" variant="ghost" size="lg" isRound={true} _hover={{ bg: 'red.800' }} icon={<Globe size="28px" />} />
                            </HStack>
                        </Box>
                    </WrapItem>



                    <WrapItem>
                        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                            <Box bg="white" w={{ base: 300, sm: 350, md: 540, lg: 600 }}>
                                <Box m={3} pt={3} pb={3} color="#0B0E3F">
                                    <VStack justify={'center'} spacing={5}>
                                        <FormControl isInvalid={!!errors.from_name}>
                                            <FormLabel> {t('ContactText1')}</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement pointerEvents="from_name" children={<InfoIcon color="gray.800" />} />
                                                <Input
                                                    id="from_name"
                                                    type="text"
                                                    name="from_name"
                                                    size="md"
                                                    onChange={e => {
                                                        setname(e.target.value);
                                                    }}
                                                    placeholder="Your name"
                                                    {...register('from_name', { required: 'This is required', maxLength: 80 })}
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>{errors.from_name && errors.from_name.message}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl isInvalid={!!errors.to_name}>
                                            <FormLabel>{t('ContactText2')}</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement pointerEvents="to_name" children={<EmailIcon color="gray.800" />} />
                                                <Input
                                                    type="email"
                                                    id="to_name"
                                                    name="to_name"
                                                    size="md"
                                                    onChange={e => {
                                                        setemail(e.target.value);
                                                    }}
                                                    placeholder="exemple@fdgroup.company"
                                                    {...register('to_name', { required: 'This is required', pattern: /^\S+@\S+$/i })}/>
                                            </InputGroup>
                                            <FormErrorMessage>{errors.to_name && errors.to_name.message}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl isInvalid={!!errors.message}>
                                            <FormLabel>{t('ContactText3')}</FormLabel>
                                            <Textarea
                                                id="message"
                                                borderColor="gray.300"
                                                _hover={{
                                                    borderRadius: 'gray.300'
                                                }}
                                                name="message"
                                                placeholder="message"
                                                onChange={e => {
                                                    setmessage(e.target.value);
                                                }}
                                                {...register('message', { required: 'This is required', maxLength: 80 })}/>
                                            <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
                                        </FormControl>

                                        <FormControl float="right">
                                            <Button
                                                type="submit"
                                                variant="solid"
                                                bg={'red.900'}
                                                color="white"
                                                _hover={{
                                                    bg: 'red.300',
                                                    cursor: 'pointer'
                                                }}
                                                isLoading={isSubmitting}>
                                                {t('ContactBtn')}
                                            </Button>
                                        </FormControl>
                                    </VStack>
                                </Box>
                            </Box>
                        </form>
                    </WrapItem>
                </Wrap> 
            </Box>
        </Box>
    </Flex>
</Layout>
    );
}

export default Contact;
