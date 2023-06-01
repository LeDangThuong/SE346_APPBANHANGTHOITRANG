import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SortingDropdownProps {
  onSortingSelect: (sortOption: string) => void;
}

function SortingDropdown({ onSortingSelect }: SortingDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSortingSelect(option);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown}>
        <Text>Sort By: {selectedOption || 'Select an option'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <TouchableOpacity onPress={() => handleOptionSelect('Price (Low to High)')}>
            <Text>Price (Low to High)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect('Price (High to Low)')}>
            <Text>Price (High to Low)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect('Top Recommend')}>
            <Text>Top Recommend</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect('Newest')}>
            <Text>Newest</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default SortingDropdown;
