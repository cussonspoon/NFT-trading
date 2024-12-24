import React, { useState } from 'react';
import styled from 'styled-components';
import { XCircle } from 'lucide-react'; // Importing a stylized 'X' icon from lucide-react

const Wrapper = styled.div`
  transition: all 0.5s ease;
  overflow: visible; // Change this from 'hidden' to 'visible'
  max-height: ${(p) => (p.expanded ? '300px' : '0px')};
  opacity: ${(p) => (p.expanded ? '1' : '0')};
  border: ${(p) => (p.expanded ? '1px solid #ccc' : '0px solid #ccc')};
  border-radius: 12px;
  position: relative;
  padding: 10px;
`;

const TagButton = styled.button`
  background: ${(p) => (p.selected ? 'green' : 'grey')};
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${(p) => (p.selected ? 'darkgreen' : 'lightgrey')};
  }
`;

const CloseIcon = styled(XCircle)`
  position: absolute;
  top: -10px; // Adjust position to be slightly outside the top right corner
  right: -10px;
  cursor: pointer;
  font-size: 24px;
  color: #666;
  background: white; // Add background to stand out over the tags if overlapping
  border-radius: 50%; // Make the icon round
`;

const ChooseTagsButton = styled.button`
  background: #505cc4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #3a3f9b;
  }
`;

const TagSelector = ({ availableTags, selectedTags, setSelectedTags }) => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleTagSelection = (tag) => {
      setSelectedTags(prev => {
        const isAlreadySelected = prev.includes(tag);
        if (isAlreadySelected) {
          return prev.filter(t => t !== tag); // Remove the tag if it's already selected
        } else {
          return [...prev, tag]; // Add the tag if it's not selected
        }
      });
    };
  
    const toggleExpanded = () => setExpanded(!expanded);
  
    return (
      <div>
        {!expanded && (
          <ChooseTagsButton onClick={toggleExpanded}>
            Choose Tags
          </ChooseTagsButton>
        )}
        <Wrapper expanded={expanded}>
          {expanded && (
            <>
              <CloseIcon onClick={toggleExpanded} size={24} />
              {availableTags.map((tag, index) => (
                <TagButton
                  key={index}
                  selected={selectedTags.includes(tag)}
                  onClick={() => toggleTagSelection(tag)}
                >
                  {tag}
                </TagButton>
              ))}
            </>
          )}
        </Wrapper>
      </div>
    );
  };
  
  export default TagSelector;
