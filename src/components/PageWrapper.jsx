import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => (
  <motion.div
   style={{ backgroundColor: '#0b0d17' }}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
