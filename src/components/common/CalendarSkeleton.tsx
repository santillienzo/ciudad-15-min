import { Skeleton, HStack } from '@chakra-ui/react';

const colors = {
     startColor: '#f8f5cf', endColor:'#FDB913'
}

function CalendarSkeleton() {
  return (
    <HStack spacing={1} alignItems="center">
      {/* Primer conjunto de dos skeletons estrechos */}
     <Skeleton height="2.25rem" width="2rem" borderRadius="md" {...colors}/>

      {/* Skeleton más ancho */}
      <Skeleton height="2.25rem" width="6rem" borderRadius="md" {...colors} marginRight='1rem'/>

      {/* Segundo conjunto de skeletons estrechos */}

      {/* Skeleton más ancho al final */}
     <Skeleton height="2.25rem" width="2rem" borderRadius="md" {...colors}/>

      <Skeleton height="2.25rem" width="6rem" borderRadius="md" {...colors} />
    </HStack>
  );
}

export default CalendarSkeleton