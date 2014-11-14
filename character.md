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

## Flags

By using some extra moves, you can tick one of your flags on. Each flag
represents an improved state of your system. When you fail a roll, the GM can
decide to untick one of your flags, and you're losing its features.

Flag       | Effect
---------- | -------------------------------------------------------------------
Security   | "When your system is under attack" gets a +1 Bonus
Backup     | If the GM is playing "Data is lost" on you, simply "Operate on the system" to restore it.
Redundancy | If the GM is playing "Hardware failure" on you, simply "Solve hardware problems" to ignore the failure


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

When you're performing a *Move*, the GM is asking you to roll two six-sided
dice, add the appropriate stat and see what happens.

### Fiddling with your network

Depending on what problems you're facing in your datacenter, the GM may ask you
to ``roll+software`` or ``roll+hardware``.

* On 6-: Network condition is worsening, the GM is picking one *Major Issue*.
* On 7-9: You're succeeding in putting things together, but there's a cost.
  The GM picks one *Minor Issue*.
* On 10+: Your ``Bandwidth`` gauge is going up by one level (max 6).

### Operate on the system

When you need to **operate on a system** to perform a software task (scripting,
soft rebooting, shutting down / restart a service, restore backups, etc),
``roll+software``.

* On 6-: You're breaking things, the GM is picking one *Major Issue*.
* On 7-9: It's working fine, does the job, but there's a cost. The GM picks
  one *Minor Issue*.
* On 10+: Work is done, without a hiccup.

### Solve hardware problems

If you need ot **solve a hardware problem** (box refusing to boot, network wires
to plug / setup, keyboard failure, use a physical tool - a screwdriver),
``roll+hardware``.

* On 6-: You're breaking things, the GM is picking one *Major Issue*.
* On 7-9: It's working fine, does the job, but there's a cost. The GM picks
  one *Minor Issue*.
* On 10+: Work is done, without a bug.

### When your system is under attack

DDOS'ed, Trojan, Malware, unexpected intrusion, massive data stealing...
``roll+cool`` to find out what's going on, and how you can stop this:

* On 6-: Your system is dying. The GM is picking one *Major Issue*.
* On 7-9: You can stop the incident, but the threat is still here. The GM picks
  one *Minor Issue*.
* On 10+: You've stopped the attack, it should be working normally now.

-----

## Extra moves

Each character can pick one of these Extra Moves, and only one. It represents
a field of expertise of your character, that can help you in your tasks.

### Secure the system

Use this move when you want to improve security on your system. If you succeed,
you can check the ``Security`` flag. This bonus will stay until the GM tells you
it's off. ``roll+software``:

* On 6-: Your system is exploitable. The GM is picking one *Issue*.
* On 7-9: Your system is more secure. Check the ``Security`` flag.
* On 10+: Your system is way more secure. You check the ``Security`` flag, and
  as soon as you're under attack, you can get a reroll if your Move result is
  not satisfying,

### Backup your data

Use this move to setup backups of your precious data. If you succeed, you can
check the ``Backup`` flag. This bonus will stay until the GM tells you it's gone.

* On 6-: Your system is not backed up. The GM is picking one *Issue*.
* On 7-9: Your system has backups. Check the ``Backup`` flag.
* On 10+: Your system has a great backup set. You check the ``Backup`` flag, and
  if the GM plays the "Data is lost" Move on you, you don't have to roll to
  restore it,


### Setting up redundant servers

Use this move to add up a redundant system on some part of your infrastructure.
If you succeed, check the ``Redundancy`` flag. The bonus will stay until the GM
tells you to uncheck it. ``roll+hardware``:

* On 6-: No redundancy. The GM is picking one *Issue*.
* On 7-9: Redundant system is set. Check the ``Redundancy`` flag.
* On 10+: Fault-tolerant redundant system. You check the ``Redundancy`` flag,
  and if the GM plays "Hardaware failure" on you, you don't have to roll to
  restore it.
