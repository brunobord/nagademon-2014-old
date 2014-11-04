# Your character

You're either **male or female**. You can be the young Padawan or the old BOFH.
Whatever your **uptime** is. You have an Internet **nickname** ; most people
don't even know your **real name**.

Frankly, nobody (except you) cares about this.

You're a system or network administrator. As long as the network is up and the
backups are done, you can wear whatever **t-shirt** you want, run whichever
**Operating System** you need, write scripts in your **language** of choice,
you'll get paid.

You work in this **Datacenter**. The **location** might not be interesting. More
important is your **timezone**.

## Stats

You have 4 stats:

* ``network``: how you are skilled in handling network failures, get through
  stubborn routers and get your way on the Internets,
* ``software``: how to crack a protected system, and encrypted data flow. How to
  deal with software issues, write a program to work things out using your
  favorite scripting language,
* ``hardware``: repair a machine, add components, build a machine out of parts,
  establish a physical connection (network wires, optic fiber, power),
* ``cool``: how you handle pressure, coming from hardware, software, or people,
  online or in real life. The cooler you are, the better you'll manage incoming
  annoyances,

Spread your stats to +2, +1, 0, -1.

## Gauges

### Bandwidth

Level | Status
----- | ----------------------------------------------------------------------
0     | no bandwidth, no running system, you're deaf, dumb and blind,
1     | you have at least one machine up and running, on your *local* network,
2     | bits of IP packets are going their way. You can reach people you know in your local area, but you don't always get their messages back, long delays, etc.,
3     | more stable network. text-based communication tools work fine. You can reach central IRC servers,
4     | e-mails servers are ready, you can receive and send e-mails,
5     | you can reach parts of the WWW. Sometimes you'll only have half of the page, no image or no text. VoIP would work, but no video yet.
6     | You have full access to what was once the Internet. VoIP or video chat is working, as long as the person you want to talk to is still alive.

----

You may want to fill [your character sheet](character.html)

----

## Basic moves

### Fiddling with your network

When you're **Fiddling with your network**, ``roll+network``.

* On 6-: Network condition is worsening, the GM is picking one option among the
  following.
* On 7-9: You're succeeding in putting things together. Status quo.
* On 10+: Your ``Bandwidth`` gauge is going up by one level (max 6).

Issues:

* Your ``Bandwidth`` gauge is going down by one point (min is 0),
* There's a hardware failure somewhere,
* There's a piece of software going crazy (memory leaks, abnormal high load),

### Operate on a system

When you need to **operate on a system** to perform a software task (scripting,
soft rebooting, shutting down / restart a service, etc), ``roll+software``.

* On 6-: You're breaking things. The GM is picking one option among the
  following.
* On 7-9: It's working fine, does the job.
* On 10+: not only it's working, but you have fixed more bugs, improved
  performances, found bits of CPU/RAM to recycle,
