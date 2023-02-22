import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import {
    Box,
  Button, Flex,
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
import '@fontsource/roboto/700.css'
import '@fontsource/inter/600.css';

import '@fontsource/rubik-moonrocks/400.css'; 
import emailjs from '@emailjs/browser';
import { EnvelopeSimple, Globe, LinkedinLogo, MapPinLine, Phone, TwitterLogo, User } from 'phosphor-react';
import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../layout/Layout';
import ScrollReveal from 'scrollreveal';
const sr = ScrollReveal();


interface FormState {
  from_name: string,
  to_name: string,
  message: string
}

// type FormState = {
//   from_name: string,
//   to_name: string,
//   message: string

// }

const Contact: React.FC = () => {

  const {t} = useTranslation();
  useEffect(() => {
            sr.reveal('.contactf', {
                rotate: {x: 0, y: 20, z: 0},
                duration: 800,
            },);
        }, []);
 // const form = useRef();

  const [formState, setFormState] = useState<FormState>({

    from_name: "",
    to_name: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({
    from_name: "",
    to_name: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormState((prevState) => ({...prevState, [name]: value}));
  };

  const toast = useToast();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formState);
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    try {
      const emailResult = await emailjs.sendForm(
        "service_7l5qci6", "template_ybyzxm7",
        e.currentTarget as HTMLFormElement,
        "b8pJCYyLwxo1IYfh-"
      );
      if(emailResult.text === "OK") {
        toast({
          title: "Message sent",
          status: "success",
          description: 'Your message has been sent successfully.',
          duration: 5000,
          position:'top-right',
          isClosable: true,
        });
        setFormState({
          from_name: "",
          to_name: "",
          message: "",
        });
        setErrors({ 
          from_name: "",
          to_name: "",
          message: "",
        });
      } else {
        throw new Error("Email send failed");
      }

    } catch(error) {
      toast({
        title: "Error sending message",
        description: "Please try again later",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

  };


  const validateForm = (formState: FormState): Partial<FormState> => {
    const errors: Partial<FormState> = {};

    if(!formState.from_name) {
      errors.from_name = "Please enter your name";
    }

    if(!formState.to_name) {
      errors.to_name = "Please enter the recipient's name";
    }
    if(!formState.to_name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.to_name)) {
      errors.to_name = "Please enter a valid email address";
    }
    if(!formState.message) {
      errors.message = "Please enter a message";
    }
    return errors
  };


    return (
<Layout>
        <Flex  fontFamily={"'Inter', sans-serif"} color={"gray.600"} maxW="full" pb={30} className='contactf' visibility={'hidden'}>
          <Box color="white" borderRadius="lg" m={{sm: 1, md: 6, lg: 8}} p={{sm: 1, md: 5, lg: 6}}>
            <Box  mt={12}>
              <Wrap maxW={'full'} justify={'space-between'} spacing={{base: 10, sm: 3, md: 5, lg: 10}}>
                <WrapItem>
                  <Box>
                    <Heading color={'gray.800'} p={1}>
                      {t('ContactFormH')}
                    </Heading>
                    <Text p={1} mt={{sm: 3, md: 3, lg: 5}} color="gray.600">
                      {t('ContactText0')}
                    </Text>

                    <Box color={'gray.600'}>
                      <VStack spacing={3} alignItems="flex-start">
                        <Box display={'flex'} p={1} fontSize={{base: '1xl', sm: '1xl'}}>
                          <Phone color="#C53030" size={30} />
                          <Text p={2} w={{base: 180, sm: 200, md: 250, lg: 330}}>
                            +244 927 538 808 / +244 931901243
                          </Text>
                        </Box>

                        <Box p={1} display={'flex'} alignContent={'space-between'} fontSize={{base: '1xl', sm: '1xl'}}>
                          <EnvelopeSimple color="#C53030" size={30} />
                          <Text p={2} w={{base: 200, sm: 200, md: 250, lg: 200}}>
                            info@fdgroup.company
                          </Text>
                        </Box>

                        <Box display={'flex'} pt={2} p={1} width="350px">
                          <MapPinLine color={'#C53030'} size={30} />
                          <Text p={2} w={{base: 200, sm: 250, md: 300, lg: 350}}>
                            Distrito Ingombota Rua Bartolomeu Dias Zona 4 Casa N 1 Luanda / Angola
                          </Text>
                        </Box>
                      </VStack>
                    </Box>

                    <HStack mt={{lg: 5, md: 5}} spacing={5} px={5} alignItems="flex-start">
                      <IconButton aria-label="facebook" variant="ghost" size="lg" isRound={true} _hover={{bg: 'red.800'}} icon={<LinkedinLogo size="28px" />} />
                      <IconButton aria-label="github" variant="ghost" size="lg" isRound={true} _hover={{bg: 'red.800'}} icon={<TwitterLogo size="28px" />} />
                      <IconButton aria-label="discord" variant="ghost" size="lg" isRound={true} _hover={{bg: 'red.800'}} icon={<Globe size="28px" />} />
                    </HStack>
                  </Box>
                </WrapItem>

                <WrapItem> 
                  <form onSubmit={handleSubmit}>
                    <Box bg="white" w={{base: 300, sm: 350, md: 540, lg: 600}}>
                      <Box m={3} pt={3} pb={3} color="#0B0E3F">
                        <VStack justify={'center'} spacing={5}>

                          <FormControl id="from_name" isInvalid={!!errors.from_name}>
                            <FormLabel>  {t('ContactText1')} </FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement children={<InfoIcon color="gray.800" />} />
                              <Input 
                                name="from_name" value={formState.from_name} onChange={handleInputChange}
                                type="text"
                                size="md"
                                placeholder="Your name" />

                            </InputGroup>
                            {errors.from_name && (<FormErrorMessage>{errors.from_name}</FormErrorMessage>)}
                          </FormControl>

                          <FormControl id="to_name" isInvalid={!!errors.to_name}>
                            <FormLabel> {t('ContactText2')} </FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement children={<EmailIcon color="gray.800" />} />
                              <Input 
                                type="email" value={formState.to_name}
                                name="to_name" onChange={handleInputChange}

                                size="md"
                                placeholder="exemple@fdgroup.company"
                              />

                            </InputGroup>  
                            {errors.to_name && (<FormErrorMessage>{errors.to_name}</FormErrorMessage>)}
                          </FormControl>

                          <FormControl id="message" isInvalid={!!errors.message}>
                            <FormLabel> {t('ContactText3')} </FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: 'gray.300'
                              }}
                              name="message" value={formState.message} onChange={handleInputChange}
                              placeholder="Enter your message here"
                            />
                            {errors.message && (<FormErrorMessage>{errors.message}</FormErrorMessage>)}
                          </FormControl>

                          <FormControl float="right">
                            <Button
                              type="submit"
                              variant="solid"
                              bg={'gray.600'}
                              color="white"
                              _hover={{
                                bg: 'red.400',
                                cursor: 'pointer'
                              }}>
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
