/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [id, setId] = useState('');

  useEffect(() => {
    setId(Date.now());
  }, []);

  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        id={`email-${id}`}
        placeholder="Join ➡️"
      />
     
      <Button>
      <Link sx={styles.linke} href='https://docs.google.com/forms/d/e/1FAIpQLScWdZiCOMIP1QK224soiV0npKYvJ9DqYxyUIFC2wKHTzbwTZQ/viewform?usp=sf_link' passHref>
        <a target={'_blank'} style={{textDecoration:'none',color:'azure'}}>
        {buttonLabel ?? 'Join Zeal'}
        </a>
       
        </Link>
        </Button>
     
     
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    linke:{
      textDecoration:'none',
      color:'white',
      fontSize:['1.2rem','1.2rem','1.2rem','1.2rem','1.2rem'],
    },
    button: {
      ml: [3],
    },
    a:{
      color: 'azure',
    }
  },
};
