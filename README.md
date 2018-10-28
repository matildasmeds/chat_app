# README

Minimal Chat App, for fun and practice.

Uses ActionCable to create a channel, broadcasts messages to all clients.

Rails 5.2.1
Ruby 2.5.1

# Possible future ideas
- Let users authenticate
- Let user choose nick
- Some logging / chat history (for instance to Redis, date-key, ordered set, line with ip-address, timestamp, message)
- Several chats
- Don't submit if text field is empty
- Clear text field after submit
- Show server status to user: connected | disconnected | rejected
- Responsive layout (with @media tag for instance)
- Scrub user input
