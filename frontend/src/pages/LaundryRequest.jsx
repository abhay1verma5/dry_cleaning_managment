import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
 


} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRequest } from "../store/app/app_Action";



const LaundryRequest = () => {
  const { isAuth, userId } = useSelector((store) => store.authReducer);
  const toast = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Step 1: Add a new state variable for room number
  const [form, setForm] = useState({
    userId,
    pickupDate: "",
    topwears: "",
    total_topwears: "",
    bottomwears: "",
    total_bottomwears: "",

    woolenCloths: "",
    total_woolenCloths: "",
    blanket_bedsheet: "",
    total_blanket_bedsheet: "",
    serviceType: "",
    contactNumber: "",
    description: "",
    roomNumber: "", // New state for room number
  });

  const handleSubmit = () => {
    dispatch(createRequest(form, toast));
  };
 
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <Box p="1rem" w="80%" boxSizing="border-box" bg="#f7f7f7">
      {/* Laundry Request Form*/}
      <Box>
        <Flex gap="10px">
          <FormControl>
            <FormLabel>Select Pickup Date</FormLabel>
            <Input
              bgColor="whiteAlpha.700"
               onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
              size="sm"
              type="datetime-local"
            />
          </FormControl>
          <FormControl>
          {/* Step 3: Add a new FormControl for room number */}
          <FormLabel>Room Number</FormLabel>
          <Input
            bgColor="whiteAlpha.700"
            onChange={(e) => setForm({ ...form, roomNumber: e.target.value })}
            size="sm"
            placeholder="0"
          />


        </FormControl>
        </Flex>
        {/* ... (other form controls) */}
      
      <Flex gap="10px">


      <FormControl>
      <FormLabel>Topwear</FormLabel>
      <Input
        bgColor="whiteAlpha.700"
        onChange={(e) => setForm({ ...form, topwears: e.target.value })}
        size="sm"
        placeholder="Tshirt, Top, Shirt"
      />
    </FormControl>

    <FormControl>
    <FormLabel>Total Topwear</FormLabel>


   <Input   bgColor="whiteAlpha.700"
    onChange={(e) => setForm({ ...form, total_topwears: e.target.value })}
    size="sm"
    placeholder="0"/>
    </FormControl>
      </Flex>

   <Flex gap="10px">
        <FormControl>
          <FormLabel>Bottomwear</FormLabel>
          <Input
            bgColor="whiteAlpha.700"
            onChange={(e) => setForm({ ...form, bottomwears: e.target.value })}
            size="sm"
            placeholder="Lower, jeans, Leggins"
          />
        </FormControl>

        <FormControl>
    <FormLabel>Total Bottomwear</FormLabel>
   < Input bgColor="whiteAlpha.700"
    onChange={(e) => setForm({ ...form, total_bottomwears: e.target.value })}
    size="sm"
    placeholder="0"/>

  </FormControl>
      </Flex>
      <Flex gap="10px">
        <FormControl>
          <FormLabel>Woolen Cloth</FormLabel>
          <Input
            bgColor="whiteAlpha.700"
            onChange={(e) => setForm({ ...form, woolenCloths: e.target.value })}
            size="sm"
            placeholder="Woolen Cloth"
          />
        </FormControl>
        <FormControl>
    <FormLabel>Total Woolen Cloth</FormLabel>
    <Input   bgColor="whiteAlpha.700"
    onChange={(e) => setForm({ ...form, total_woolenCloths: e.target.value })}
    size="sm"
    placeholder="0"/>
  </FormControl>
      </Flex>
      <Flex gap="10px">
        <FormControl>
          <FormLabel>Blanket Or Bedsheet</FormLabel>
          <Input
            bgColor="whiteAlpha.700"
            onChange={(e) => setForm({ ...form, others: e.target.value })}
            size="sm"
            placeholder="Others"
          />
        </FormControl>
        <FormControl>
        <FormLabel>Total Blanket or Bedsheet</FormLabel>

        <Input   bgColor="whiteAlpha.700"
        onChange={( e) => setForm({ ...form, total_blanket_bedsheet: e.target.value })}
        size="sm"
        placeholder="0"
        />
        
      </FormControl>
          </Flex>
         <FormControl>
          <FormLabel>Select Service Type</FormLabel>
          <Select
            bgColor="whiteAlpha.700"
            onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
            placeholder="- - - - - - - -"
          >
            <option value="Fast">Fast Service</option>
            <option value="Regular">Regular Service</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Contact Number</FormLabel>
          <Input
            bgColor="whiteAlpha.700"
            onChange={(e) =>
              setForm({ ...form, contactNumber: e.target.value })
            }
            size="sm"
            type="number"
            placeholder="Contact Number"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            bgColor="whiteAlpha.700"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            size="sm"
            placeholder="Description(if any)"
          />
        </FormControl>
        <Button onClick={handleSubmit} mt="10px" colorScheme="blue" w="100%">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default LaundryRequest;
