import React, { useState } from "react";
import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";

function Converter() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("Celsius");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "temperature") {
            setTemperature(value);
        } else if (name === "scale") {
            setScale(value);
        }
    };

    const convertTemperature = (toCelsius) => {
        if (!isNaN(temperature)) {
            setError("");
            const convertedTemperature = toCelsius
                ? ((parseFloat(temperature) - 32) * 5) / 9
                : (parseFloat(temperature) * 9) / 5 + 32;
            const convertedScale = toCelsius ? "Celsius" : "Fahrenheit";
            setResult(
                `${temperature}° ${scale} is equal to ${convertedTemperature.toFixed(
                    2
                )}° ${convertedScale}`
            );
        } else {
            setResult("");
            setError("Please enter a valid number");
        }
    };

    return (
        <Box w={{ base: "90%", md: "60%", lg: "40%" }} m="auto" mt="10">
            <Text
                textAlign="center"
                fontSize={{ base: "30px", md: "40px" }}
                fontWeight="bold"
            >
                Temperature Converter
            </Text>

            <Flex
                mt="10"
                alignItems="center"
                gap="5"
                flexDirection={{ base: "column", md: "row" }}
            >
                <Input
                    size="lg"
                    fontSize="16px"
                    w={{ base: "100%", md: "80%" }}
                    type="text"
                    placeholder="Enter temperature"
                    name="temperature"
                    value={temperature}
                    onChange={handleInputChange}
                />
                <Select
                    size="lg"
                    fontSize="16px"
                    w={{ base: "100%", md: "20%" }}
                    name="scale"
                    value={scale}
                    onChange={handleInputChange}
                >
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                </Select>
            </Flex>

            <Flex
                mt="10"
                alignItems="center"
                gap="5"
                flexDirection={{ base: "column", md: "row" }}
            >
                <Button
                    w="100%"
                    colorScheme="messenger"
                    onClick={() => convertTemperature(true)}
                >
                    Convert to Celsius
                </Button>
                <Button
                    w="100%"
                    colorScheme="orange"
                    onClick={() => convertTemperature(false)}
                >
                    Convert to Fahrenheit
                </Button>
            </Flex>

            <Box textAlign="center" fontWeight="bold" mt="8" fontSize="18px">
                {error && <Text color="red">{error}</Text>}
                {result && <Text>{result}</Text>}
            </Box>
        </Box>
    );
}

export default Converter;
