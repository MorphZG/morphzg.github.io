---
date: 
source: 
tags:
  - network
title: TCP-UDP
type: knowledge
URL: 
---

# TCP-UDP

- TCP (Transmission Control Protocol) is connection based protocol, slow but more reliable.
- UDP (User Datagram Protocol) is connectionless protocol, fast but less reliable.

## TCP

Connection oriented protocol, before any communication both client and a server must verify a connection by utilizing a "three-way handshake". It is an exchange of SYN (Synchronize Sequence Number) and ACK (Acknowledgement Sequence Number) packets.

Only after connection is verified the data can be delivered. Delivery of data is guaranteed. If something happens to data packet the sender will send it again until full data packet is received.

### Three-Way Handshake

- Step 1: After connection between server and client is established, client node sends a SYN
- Step 2: The server receives the SYN packet from the client node and responds with confirmation packet of SYN/ACK
- Step 3: Client node receives the SYN/ACK from the server and responds with an ACK packet

All these steps are necessary to verify the serial numbers originated by both sides, guaranteeing the stability of the connection.

Since both hosts must acknowledge the connection parameters of the other side, a missing or out-of-order segment can be quickly detected before the actual data transfer process is initiated.

## UDP

Sends and receives the data but it is connectionless, it will not establish the session and will not guarantee data delivery. Fire and forget protocol, does not care if data is delivered so it's a lot faster but less reliable.

## Read more

- [youtube.com/playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQX_Zkt_8teMRsdY4sNt4BX6) "TCP" by Hussein Nasser
- [youtube.com/video](https://www.youtube.com/watch?v=jE_FcgpQ7Co) "TCP vs UDP - Explaining Facts and Debunking Myths - TCP Masterclass" by Practical Networking
