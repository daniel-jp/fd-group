import {
    Box,
    Button,
    Collapse,
    color,
    Flex,
    Icon,
    IconButton,
    Image,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { CaretCircleDoubleRight, CaretDown, List, X } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink as RouteLink } from 'react-router-dom';

import FdgLogo from '../fdgLogo';
import fr from '/assets/flag/fr.png';
import pt from '/assets/flag/pt.png';
import uk from '/assets/flag/uk.png';


const languageOptions = [
    {
        name: "EN",
        value: "en",
        flag: uk,
    },

    {
        name: "PT",
        value: "pt",
        flag: pt
    },

    {
        name: "FR",
        value: "fr",
        flag: fr
    }

]

function Navbar() {

    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const {isOpen, onToggle} = useDisclosure();
    const [makeUpMenu, setUpHeaderContent] = useState(false);

    useEffect(() => {
        const UpHeader = () => {
            window.scrollY > 10 ? setUpHeaderContent(true) : setUpHeaderContent(false);
        };
        window.addEventListener("scroll", UpHeader);
        {
            return () => {
                window.removeEventListener("scroll", UpHeader);
            };
        }
    }, []);


    const {t, i18n} = useTranslation()



    return (
        <Box
            as="nav"
            position={"fixed"}
            boxShadow={makeUpMenu ? "md" : "inner"}
            transition={"ease-in-out"}
            transitionDuration={"200s"}
            top={0}
            left={0}
            right={0}
            zIndex={1000}>
            <Flex
                bg={useColorModeValue("gray.800", "white")}
                color={useColorModeValue("gray.600", "white")}
                minH={"80px"}
                py={{base: 2}}
                px={{base: 4, md: 8}}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={"gray.600"}
                align={"center"}>


                <Flex flex={{base: 1, md: "auto"}} ml={{base: -2}} display={{base: "flex", md: "none"}}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <X size={32} /> : <List size={32} />}
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                <Text fontFamily={"heading"} color={useColorModeValue("gray.800", "white")}>
                    <RouteLink to="/">
                        <FdgLogo />
                    </RouteLink>
                </Text>

                <Flex flex={{base: 1}} justify={{base: "center", md: "start"}}>
                    <Flex display={{base: "none", md: "flex"}} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>


                <Stack flex={{base: 1, md: 0}} justify={"flex-end"} direction={"row"} spacing={2}>

                    {languageOptions.map((languageOption) => (
                            <Button
                                key={`${languageOption.value}`}
                                bg={"gray.800"}
                                w={12} h={12}
                                borderRadius={"30px"}
                                display={'botton'}
                                onClick={() => {
                                    i18n.changeLanguage(languageOption.value)
                                }}

                                color={"white"}
                                fontSize={"12px"}
                                fontWeight={"bord"}
                                _hover={{
                                    bg: "gray.800",
                                }}>
                                <Image src={languageOption.flag} alt={languageOption.name} />
                                <span style={{
                                    fontWeight: i18n.language === languageOption.value ? "bord" : "normal",
                                    color: i18n.language === languageOption.value ? "red" : "white",
                                }}>
                                    {languageOption.name}</span>

                            </Button>

                        ))}

                </Stack>

            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}


export default Navbar;

const DesktopNav = () => {

    const {t} = useTranslation()
    const linkColor = useColorModeValue("gray.200", "gray.200");
    const linkHoverColor = useColorModeValue("gray.500", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {
                NAV_ITEMS.map((navItem) => (

                    <Box key={navItem.label}>

                        <Popover trigger={"hover"} placement={"bottom-start"}>

                            <PopoverTrigger>
                                <Link
                                    to={navItem.href ?? "/"}
                                    _activeLink={{color: "red"}}
                                    as={RouteLink}
                                    p={2}
                                    color={linkColor}
                                    fontSize={"sm"}
                                    fontWeight={500}
                                    _hover={{
                                        textDecoration: "none",
                                        color: linkHoverColor,
                                    }}>
                                    {t(navItem.label)}
                                </Link>


                            </PopoverTrigger>

                            {navItem.children && (
                                <PopoverContent

                                    border={0} boxShadow={"xl"}
                                    bg={popoverContentBgColor}
                                    p={4} rounded={"xl"} minW={"sm"}>
                                    <Stack>
                                        {navItem.children.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}
                                    </Stack>
                                </PopoverContent>
                            )}
                        </Popover>
                    </Box>
                ))}
        </Stack>
    );
};



const DesktopSubNav = ({label, href}: NavItem) => {
    const {t} = useTranslation()

    return (
        <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"sm"}
            _hover={{bg: useColorModeValue("pink.50", "gray.900")}}>

            <Stack direction={"row"} align={"center"}>


                <Box>
                    <Text transition={"all .3s ease"} _groupHover={{color: "pink.400"}} fontWeight={500}>
                        {t(label)}
                    </Text>
                    {/* <Text fontSize={"sm"}> {t("subLabel")}</Text> */}
                </Box>



                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{opacity: "100%", transform: "translateX(0)"}}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}>
                    <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>

            </Stack>
        </Link>
    );
};




const MobileNav = () => {

    return (
        <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{md: "none"}}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label}  {...navItem} />
            ))}
        </Stack>
    );
};


const MobileNavItem = ({label, children, href}: NavItem) => {
    const {isOpen, onToggle} = useDisclosure();
    const {t} = useTranslation()


    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex py={2} as={Link}
                href={href}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}>
                <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
                    {t(label)}
                </Text>
                {
                    children && (
                        <Icon
                            as={CaretDown}
                            onClick={onToggle}
                            transition={"all .25s ease-in-out"}
                            transform={isOpen ? 'rotate(180deg)' : ''}
                            w={6}
                            h={6} />
                    )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{marginTop: "0!important"}}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}>

                    {
                        children && children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {t(child.label)}
                            </Link>

                        ))}
                </Stack>

            </Collapse>
        </Stack>
    );
};


interface NavItem {
    label: string;
    subLabel?: string;
    children?: NavItem[];
    href?: string;
}


export const NAV_ITEMS: NavItem[] = [
    {
        label: "home0",
        href: "/",

    }, {
        label: 'home1',
        href: '/about',

    },

    {
        label: "home2",
        href: "/products",
        children: [
            {
                label: "childrenLab0",
                // subLabel: "childrenSubLab0",
                href: "/products/servers",
            },
            {
                label: "childrenLab1",
                // subLabel: "childrenSubLab1",
                href: "/products/devices",
            },
            {
                label: "childrenLab2",
                //  subLabel: "childrenSubLab2",
                href: " /products/parts",
            },
            {
                label: "childrenLab3",
                // subLabel: "childrenSubLab3",
                href: "/products/audiovisuel",
            },
            {
                label: "childrenLab4",
                //  subLabel: "childrenSubLab4",
                href: "/products/other",
            },
        ],
    },
    {
        label: 'home3',
        href: '/services',
    },
    {
        label: 'home4',
        href: '/contact',
    },
];