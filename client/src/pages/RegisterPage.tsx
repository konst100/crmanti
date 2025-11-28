import { useState } from 'react';
import { TextInput, PasswordInput, Button, Paper, Title, Container, Group, Anchor } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name }),
            });

            if (response.ok) {
                alert('Registration successful! Please login.');
                navigate('/login'); // We don't have a login page yet, but this is the flow
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error(error);
            alert('Error registering');
        }
    };

    return (
        <Container size={420} my={40}>
            <Title ta="center">Create an Account</Title>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={handleSubmit}>
                    <TextInput label="Name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    <TextInput label="Email" placeholder="you@example.com" required mt="md" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button fullWidth mt="xl" type="submit">
                        Register
                    </Button>
                </form>
                <Group justify="center" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => navigate('/login')} size="xs">
                        Already have an account? Login
                    </Anchor>
                </Group>
            </Paper>
        </Container>
    );
}
