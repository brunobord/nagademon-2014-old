# Your character

You're either **male or female**. You can be the young *Padawan* or the old
*BOFH*. Whatever your **uptime** is. You have an Internet **nickname** ; most
people don't even know your **real name**.

You're a system or network administrator. As long as the network is up and the
backups are done, you can wear whatever **t-shirt** you want, run whichever
**Operating System** you need, write scripts in your **language** of choice,
you'll get paid.

You work in this **Datacenter**. The **location** might not be interesting. More
important is your **timezone**.

## Stats

You have 3 stats:

* ``software``: how to crack a protected system, and encrypted data flow. How to
  deal with software issues, write a program to work things out using your
  favorite scripting language,
* ``hardware``: repair a machine, add components, build a machine out of parts,
  establish a physical connection (network wires, optic fiber, power),
* ``cool``: how you handle pressure, coming from hardware, software, or people,
  online or in real life. The cooler you are, the better you'll manage incoming
  annoyances,

Spread your stats to +2, 0, -1.

## Gauges

### Bandwidth

At the beginning of the game, your ``Bandwidth`` starts at 1.

Level | Status
----- | ----------------------------------------------------------------------
0     | no bandwidth, no running system, you're deaf, dumb and blind,
1     | you have at least one machine up and running, on your *local* network,
2     | bits of IP packets are going their way. You can reach people you know in your local area, but you don't always get their messages back, long delays, etc.,
3     | more stable network. text-based communication tools work fine. You can reach central IRC servers,
4     | e-mails servers are ready, you can receive and send e-mails,
5     | you can reach parts of the WWW. Sometimes you'll only have half of the page, no image or no text. VoIP would work, but no video yet.
6     | You have full access to what was once the Internet. VoIP or video chat is working, as long as the person you want to talk to is still alive.

## Character sheet

You may want to fill [your character sheet](character.html). You can print
it out or leave it like that, as a simple HTML form.

You may notice that the URL query string on this web page is changing as you're
changing its values. If you want, you can "save" your character sheet by saving
the complete URL on a scratchapd and you can communicate it via the chat or mail
or save it for yourself, if you're going from one machine to another.

Here's an example [character sheet](character.html?nickname=haXX0r&name=John+Doe&uptime=23&os=OpenBSD&language=Perl&shirt=use+perl&job=System+administrator&org=US+Govt+(Embassy)&location=Paris%2C+France&tz=CEST&network=2&software=1&hardware=-1&cool=0&gauge-network=1).

----

## Basic moves

Every character has access to these Basic Moves.

When you're performing a *Move*, the GM is asking you to roll two six-sided dice,
add the appropriate stat and see what happens.

### Fiddling with your network

Depending on what problems you're facing in your datacenter, the GM may ask you
to ``roll+software`` or ``roll+hardware``.

* On 6-: Network condition is worsening, the GM is picking one *Issue*.
* On 7-9: You're succeeding in putting things together. Status quo.
* On 10+: Your ``Bandwidth`` gauge is going up by one level (max 6).

### Operate on a system

When you need to **operate on a system** to perform a software task (scripting,
soft rebooting, shutting down / restart a service, etc), ``roll+software``.

* On 6-: You're breaking things. The GM is picking one *Issue*.
* On 7-9: It's working fine, does the job.
* On 10+: not only it's working, but you have fixed more bugs, improved
  performances, found bits of CPU/RAM to recycle. This software will care about
  the hardware,

### Solve hardware problems

If you need ot **solve a hardware problem** (box refusing to boot, network wires
to plug / setup, keyboard failure, use a physical tool - a screwdriver),
``roll+hardware``.

* On 6-: You're breaking things. The GM is picking one *Issue*.
* On 7-9: It's working fine, does the job.
* On 10+: not only it's working, but it looks more robust and solid than the
  last time. Using this hardware will please the software,

### When your system is under attack

DDOS'ed, Trojan, Malware, unexpected intrusion, massive data stealing...
``roll+cool`` to find out what's going on, and how you can stop this:

* On 6-: Your system is dying. The GM is picking one *Issue*.
* On 7-9: You can stop the incident, but the threat is still here.
* On 10+: not only you've stopped the incident, but you know a bit more about
  its source, its causes, and a few clues on how to prevent it next time,

-----

## Extra moves

Each character can pick one of these Extra Moves, and only one. It represents
a field of expertise of your character, that can help you in your tasks.

TODO
